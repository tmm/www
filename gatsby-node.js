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

exports.onCreateNode = ({ node, actions, getNode }) => {
    if (node.internal.type === 'Mdx') {
        const { createNodeField } = actions
        createNodeField({
            name: 'slug',
            node,
            value: node.frontmatter.path,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(
        `
            {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { frontmatter: { published: { ne: false } } }
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
        `,
    )
    if (result.errors) {
        throw result.errors
    }

    const { createPage } = actions
    const template = path.resolve('./src/templates/post.jsx')
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: post.node.fields.slug,
            component: template,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
}
