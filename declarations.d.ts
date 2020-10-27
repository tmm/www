declare module '@silvenon/remark-smartypants'

type Frontmatter = {
    title: string
    description: string
    slug: string
    date: string | Date
    published: boolean
}

type Post = {
    frontmatter: Frontmatter
    body: string
}

interface Media {
    id?: string
    name: string
    href: string
    value: string
}
type Presence = Media
type TimeEvent = Media
type Product = Media
type Following = Media
