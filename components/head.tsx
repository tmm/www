import NextHead from 'next/head'
import { useTheme } from 'next-themes'

import { config } from '@/data'

type Props = {
    title?: string
    description?: string
}

const Head: React.FC<Props> = (props) => {
    const { title, description = config.description } = props
    const { theme } = useTheme()
    const iconTheme = theme === 'light' ? 'light' : 'dark'
    return (
        <NextHead>
            <meta content="en" httpEquiv="Content-Language" />
            <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
            />
            <meta content={config.author} name="author" />

            <title>{title ? `${title} - ${config.title}` : config.title}</title>
            <meta content={description} name="description" />

            <meta content={title} name="og:title" />
            <meta content={description} name="og:description" />
            <meta content={`https://${config.url}`} name="og:url" />
            <meta content="/og.png" name="og:image" />

            <meta content="/og.png" name="twitter:image" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={`@${config.twitter}`} name="twitter:creator" />

            <link
                href="/feed.xml"
                rel="alternate"
                title={`RSS Feed for ${config.author} (${config.url})`}
                type="application/rss+xml"
            />

            <link
                href={`/favicons/${iconTheme}.png?v=1.0`}
                key="dynamic-favicon-alternate"
                rel="alternate icon"
                type="image/png"
            />
            <link
                href={`/favicons/${iconTheme}.svg?v=1.0`}
                key="dynamic-favicon"
                rel="icon"
                type="image/svg+xml"
            />
        </NextHead>
    )
}

export default Head
