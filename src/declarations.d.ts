declare module '*.png' {}

declare module 'gatsby-plugin-simple-analytics' {
    export default function sa(eventName: string): void
}

interface Post {
    id: string
    body: string
    excerpt: string
    fields: { slug: string }
    frontmatter: { date: string; description: string; title: string }
}

interface Media {
    id: string
    name: string
    href?: string
    value?: string
}
type Person = Media
type Presence = Media
type Product = Media
type TimeEvent = Media
