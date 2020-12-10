declare module '@silvenon/remark-smartypants'
declare module 'remark-slug'
declare module 'remark-autolink-headings'

type PostType =
    | 'book'
    | 'bookmark'
    | 'code'
    | 'event'
    | 'favorite'
    | 'home'
    | 'idea'
    | 'important'
    | 'launch'
    | 'music'
    | 'photo'
    | 'place'
    | 'post'
    | 'school'
    | 'work'

type Frontmatter = {
    title: string
    description: string
    slug: string
    date: string | Date
    published: boolean
    type: PostType
}

type Post = {
    frontmatter: Frontmatter
    body: string
    excerpt?: string
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
