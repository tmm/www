const author = 'Tom Meagher'
const url = 'meagher.co'

const query = `
    {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
            limit: 1000
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                    excerpt
                    html
                }
            }
        }
    }
`
const feedOptions = {
    query: `
        {
            site {
                siteMetadata {
                    title
                    description
                    url
                    site_url: url
                }
            }
        }
    `,
    feeds: [
        {
            serialize: ({ query: { site, allMdx } }) =>
                allMdx.edges.map((edge) => {
                    return {
                        ...edge.node.frontmatter,
                        description: edge.node.excerpt,
                        url: site.siteMetadata.url + edge.node.fields.slug,
                        guid: site.siteMetadata.url + edge.node.fields.slug,
                        custom_elements: [
                            { 'content:encoded': edge.node.html },
                        ],
                    }
                }),
            query,
            output: 'rss.xml',
            title: 'rss',
        },
    ],
}

const mdxOptions = {
    defaultLayouts: {
        pages: require.resolve('./src/templates/page.tsx'),
    },
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
        'gatsby-remark-unwrap-images',
        {
            resolve: 'gatsby-remark-images',
            options: {
                backgroundColor: 'none',
                disableBgImageOnAlpha: true,
                maxWidth: 580,
                showCaptions: true,
            },
        },
        {
            resolve: 'gatsby-remark-external-links',
            options: {
                target: '_blank',
            },
        },
        'gatsby-remark-responsive-iframe',
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
        'gatsby-remark-embedder',
    ],
}

module.exports = {
    siteMetadata: {
        title: author,
        url: `https://${url}`,
        description: 'The web is both a home and a trap.',
        author,
        email: 'tom@meagher.co',
        twitter: 'awkweb',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: mdxOptions,
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: feedOptions,
        },
        {
            resolve: 'gatsby-plugin-simple-analytics',
            options: {
                domain: `sa.${url}`,
            },
        },
        'gatsby-plugin-eslint',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('postcss-import')(),
                    require('tailwindcss'),
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                develop: process.env.NODE_ENV !== 'development',
                tailwind: true,
                whitelist: ['hr'],
            },
        },
    ],
}
