const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
    })
}

exports.onCreateNode = ({ node, actions }) => {
    if (node.internal.type === 'Mdx') {
        const value = node.frontmatter.slug
        const field = { name: 'slug', node, value }
        actions.createNodeField(field)
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const query = `
        {
            allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { slug: { ne: null } } }
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            description
                        }
                        body
                    }
                }
            }
        }
    `
    const result = await graphql(query)

    if (result.errors) {
        throw result.errors
    }

    const posts = result.data.allMdx.edges
    for (const post of posts) {
        const template = path.resolve(__dirname, 'src/templates/post.tsx')
        const slug = post.node.fields.slug
        const page = {
            path: slug,
            component: template,
            context: { slug },
        }
        actions.createPage(page)
    }
}
