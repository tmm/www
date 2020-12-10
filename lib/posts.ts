import matter from 'gray-matter'
import { add } from 'date-fns'

import fs from 'fs'
import { join } from 'path'

import { toHTML } from './markdown'

const directory = join(process.cwd(), 'posts')

export async function getPost(file: string): Promise<Post> {
    const path = join(directory, file)
    const content = fs.readFileSync(path, 'utf8')
    const { data, content: body, excerpt } = matter(content, {
        excerpt: true,
        excerpt_separator: '<!-- end -->',
    })
    const bodyHtml = await toHTML(body || '')
    const excerptHtml = await toHTML(excerpt || '')
    return {
        frontmatter: <Frontmatter>data,
        excerpt: excerptHtml,
        body: bodyHtml,
    }
}

export async function getPosts(includeDrafts = false): Promise<Post[]> {
    const posts = await Promise.all(
        fs.readdirSync(directory).map((x) => getPost(x)),
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
