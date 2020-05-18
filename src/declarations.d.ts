declare module '*.png' {}

declare module 'gatsby-plugin-simple-analytics' {
    export default function sa(eventName: string): void
}

interface Window {
    twttr: {
        widgets: {
            createTweet: Function
        }
    }
}

interface Post {
    id: string
    body: string
    excerpt: string
    fields: { slug: string }
    frontmatter: { date: string; description: string; title: string }
}

interface Media {
    name: string
    href: string
}
interface Person extends Media {}
interface Presence extends Media {}
interface Product extends Media {}
interface TimeEvent extends Media {}
