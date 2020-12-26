import NextHead from 'next/head'

import { config } from '@/lib/config'

type Props = {
    title?: string
    description?: string
}

const Head: React.FC<Props> = (props) => {
    const { description = config.description } = props

    const title = props.title
        ? `${props.title} — ${config.title}`
        : config.title
    const ogUrl = `https://${config.url}`
    const ogImage = `${ogUrl}/og.png`

    return (
        <NextHead>
            {/* General */}
            <meta content="en" httpEquiv="Content-Language" />
            <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
            />

            <title>{title}</title>
            <meta content={description} name="description" />
            <meta content={config.author} name="author" />

            {/* Open Graph */}
            <meta content={title} name="og:title" />
            <meta content={description} name="og:description" />
            <meta content={ogUrl} name="og:url" />
            <meta content={ogImage} name="og:image" />

            {/* Twitter */}
            <meta content={ogImage} name="twitter:image" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={`@${config.twitter}`} name="twitter:creator" />

            {/* RSS */}
            <link
                href="/feed.xml"
                rel="alternate"
                title={`RSS Feed for ${config.author} (${config.url})`}
                type="application/rss+xml"
            />

            {/* Favicons */}
            <link
                href={`/favicons/tom.png?v=1.0`}
                key="dynamic-favicon-alternate"
                rel="alternate icon"
                type="image/png"
            />
            <link
                href={`/favicons/tom.svg?v=1.0`}
                key="dynamic-favicon"
                rel="icon"
                type="image/svg+xml"
            />
        </NextHead>
    )
}

export default Head
