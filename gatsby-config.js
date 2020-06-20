const homeData = require('./.gatsby/data/index')
const feedOptions = require('./.gatsby/options/feed')
const mdxOptions = require('./.gatsby/options/mdx')

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
        home: homeData,
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/.gatsby/posts`,
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
            },
        },
    ],
}
