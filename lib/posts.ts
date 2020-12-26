import matter from 'gray-matter'
import { add } from 'date-fns'

import fs from 'fs'
import { join } from 'path'

import { toMdx } from './to-mdx'

const directory = join(process.cwd(), 'posts')

export async function getPost(
    file: string,
    includeContent = false,
): Promise<Post> {
    const path = join(directory, file)
    const raw = fs.readFileSync(path, 'utf8')
    const { data, content, excerpt } = matter(raw, {
        excerpt: true,
        excerpt_separator: '<!-- end -->',
    })
    let bodyMdx = ''
    let excerptMdx = ''
    let bodyContent = ''
    if (includeContent) {
        bodyMdx = await toMdx(content || '')
        excerptMdx = await toMdx(excerpt || '')
        bodyContent = content
    }
    return {
        frontmatter: <Frontmatter>data,
        excerpt: excerptMdx,
        body: bodyMdx,
        content: bodyContent,
    }
}

export async function getPosts({
    includeDrafts = false,
    includeContent = false,
} = {}): Promise<Post[]> {
    const posts = await Promise.all(
        fs.readdirSync(directory).map((x) => getPost(x, includeContent)),
    )
    return posts
        .filter((x) => includeDrafts || x.frontmatter.published)
        .sort((x, y) => (x.frontmatter.date > y.frontmatter.date ? -1 : 1))
        .map((x) => ({
            ...x,
            frontmatter: {
                ...x.frontmatter,
                date: `${add(<Date>x.frontmatter.date, { days: 1 })}`,
            },
        }))
}
