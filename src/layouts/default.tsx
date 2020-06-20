import { graphql, useStaticQuery } from 'gatsby'

import React, { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../../static/favicon.png'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = (props) => {
    const query = graphql`
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
    `
    const data = useStaticQuery(query)
    const { title, description, url, twitter } = data.site.siteMetadata
    return (
        <>
            <Helmet title={title}>
                <html lang="en" />

                <meta content={description} name="description" />
                <meta content={title} name="twitter:title" />
                <meta content={`${url}/card.png`} name="twitter:image" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content={`@${twitter}`} name="twitter:creator" />

                <link
                    href={favicon as string}
                    rel="shortcut icon"
                    type="image/png"
                />
            </Helmet>
            {props.children}
        </>
    )
}

export default Layout
