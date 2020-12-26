declare module '@silvenon/remark-smartypants'
declare module 'remark-slug'
declare module 'remark-autolink-headings'

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
    body?: string
    excerpt?: string
    content?: string
}
