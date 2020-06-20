const feedOptions = require('./.gatsby/options/feed')
const mdxOptions = require('./.gatsby/options/mdx')
const postCssOptions = require('./.gatsby/options/post-css')

const author = 'Tom Meagher'
const url = 'meagher.co'
const twitter = 'awkweb'
const email = 'tom@meagher.co'

module.exports = {
    siteMetadata: {
        title: author,
        url: `https://${url}`,
        description: 'The web is both a home and a trap.',
        author,
        email,
        twitter,
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/data`,
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
            options: postCssOptions,
        },
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                develop: process.env.NODE_ENV !== 'development',
                tailwind: true,
            },
        },
    ],
}
