import { graphql, useStaticQuery } from 'gatsby'

import React, { FC, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../../static/favicon.png'
import { Footer } from '@/components'

interface Props {
    children: ReactNode
    footer?: boolean
    subscribe?: boolean
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
    const showFooter = props.footer || props.subscribe

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

            <main className="pt-20">{props.children}</main>

            {showFooter && <Footer subscribe={props.subscribe} />}
        </>
    )
}

export default Layout
