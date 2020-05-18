const query = `
    {
        allMdx(
            limit: 1000,
            sort: {
                order: DESC,
                fields: [frontmatter___date]
            }
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

module.exports = {
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
