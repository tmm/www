import NextHead from 'next/head'
import { useTheme } from 'next-themes'

import { config } from '@/lib/config'

type Props = {
    title?: string
    description?: string
}

export const Head: React.FC<Props> = ({
    description = config.description,
    ...restProps
}) => {
    const { theme } = useTheme()

    const iconTheme = theme === 'light' ? 'light' : 'dark'
    const title = restProps.title
        ? `${restProps.title} — ${config.title}`
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

            <link
                as="font"
                crossOrigin="anonymous"
                href="/fonts/source-sans/SourceSans3VF-Roman.ttf.woff2"
                rel="preload"
                type="font/woff2"
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

            {/* Favicons */}
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
