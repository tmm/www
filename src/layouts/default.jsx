import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import lightFavicon from '../../static/favicons/light.png'
import darkFavicon from '../../static/favicons/dark.png'

import { useStore } from '@/store'

const Layout = ({ children }) => {
    const {
        site: {
            siteMetadata: { description, title, twitter, url },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    title
                    twitter
                    url
                }
            }
        }
    `)
    const { appearance, isLight } = useStore()
    const favicon = isLight ? lightFavicon : darkFavicon
    return (
        <>
            <Helmet title={title}>
                <html lang="en" />

                <meta content={description} name="description" />
                <meta content={title} name="twitter:title" />
                <meta content={`${url}/card.png`} name="twitter:image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content={`@${twitter}`} name="twitter:creator" />

                <meta content={appearance} name="twitter:widgets:theme" />

                <link href={favicon} rel="shortcut icon" type="image/png" />
            </Helmet>
            {children}
        </>
    )
}

export default Layout
