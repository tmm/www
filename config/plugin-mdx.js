module.exports = {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
        'gatsby-remark-unwrap-images',
        {
            resolve: 'gatsby-remark-images',
            options: {
                backgroundColor: 'none',
                disableBgImageOnAlpha: true,
                maxWidth: 650,
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
    plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],
}
