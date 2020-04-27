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
        home: {
            presence: [
                { name: 'Are.na', children: 'tmm', href: 'https://are.na/tmm' },
                {
                    name: 'Futureland',
                    children: 'tmm',
                    href: 'https://futureland.tv/tmm',
                },
                {
                    name: 'GitHub',
                    children: 'tmm',
                    href: 'https://github.com/tmm',
                },
                {
                    name: 'Newsletter',
                    children: 'Sign up',
                    href: 'https://buttondown.email/tmm',
                },
                {
                    name: 'Twitter',
                    children: twitter,
                    href: 'https://twitter.com/awkweb',
                },
            ],
            timeline: [
                { name: '2020', children: 'Mute.vc', href: 'https://mute.vc' },
                {
                    name: '2018–',
                    children: 'Patreon.com',
                    href: 'https://patreon.com',
                },
                {
                    name: '2017–2018',
                    children: 'Kit.com',
                    href: 'https://kit.co',
                },
                {
                    name: '2017',
                    children: 'Notational.co',
                    href: 'https://notational.co',
                },
                {
                    name: '2017',
                    children: 'Dana-Farber.org',
                    href: 'https://www.dana-farber.org',
                },
                {
                    name: '2016–2017',
                    children: 'Wpi.edu',
                    href: 'https://wpi.edu',
                },
                {
                    name: '2015–2017',
                    children: 'Sapient.com',
                    href: 'https://sapient.com',
                },
                {
                    name: '2011–2015',
                    children: 'Wpi.edu',
                    href: 'https://wpi.edu',
                },
            ],
            people: [
                { name: 'Latika Sridhar', href: 'https://patreon.com/latika' },
                { name: 'Atty Eleti', href: 'https://athyuttamre.com' },
                { name: 'Bob Perry', href: 'https://zopsi.com' },
                { name: 'John Palmer', href: 'https://darkblueheaven.com' },
                {
                    name: 'internetVin',
                    href: 'https://twitter.com/internetVin',
                },
                { name: 'Tim Petri', href: 'https://timpetri.com' },
                { name: 'Abhi Vyas', href: 'https://abhi.nyc' },
                { name: 'Toby Shorin', href: 'https://tobyshorin.com' },
                { name: 'Kent De Bruin', href: 'https://www.kentdebruin.com' },
            ],
            products: [
                { name: 'Are.na', href: 'https://are.na' },
                { name: 'Buttondown', href: 'https://buttondown.email' },
                { name: 'Futureland', href: 'https://futureland.tv' },
                { name: 'Kinopio', href: 'https://kinopio.club' },
                { name: 'Linear', href: 'https://linear.app' },
                { name: 'Privacy Badger', href: 'https://privacybadger.org' },
                { name: 'Render', href: 'https://render.com' },
                { name: 'Roam Research', href: 'https://roamresearch.com' },
                {
                    name: 'Simple Analytics',
                    href: 'https://simpleanalytics.com',
                },
            ],
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
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
                plugins: [
                    'gatsby-remark-unwrap-images',
                    'gatsby-remark-images',
                ],
            },
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
        'gatsby-plugin-twitter',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                develop: process.env.NODE_ENV !== 'development',
                tailwind: true,
            },
        },
    ],
}
