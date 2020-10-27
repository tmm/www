import matter from 'gray-matter'
import { add } from 'date-fns'

import fs from 'fs'
import { join } from 'path'

const directory = join(process.cwd(), 'posts')

function get(file: string): Post {
    const path = join(directory, file)
    const content = fs.readFileSync(path, 'utf8')
    const { data, content: body } = matter(content)
    return {
        frontmatter: <Frontmatter>data,
        body,
    }
}

function list(includeDrafts: boolean = false): Post[] {
    const posts = fs
        .readdirSync(directory)
        .map((x) => get(x))
        .filter((x) => includeDrafts || x.frontmatter.published)
        .sort((x, y) => (x.frontmatter.date > y.frontmatter.date ? -1 : 1))
        .map((x) => ({
            ...x,
            frontmatter: {
                ...x.frontmatter,
                date: `${add(<Date>x.frontmatter.date, { days: 1 })}`,
            },
        }))
    return posts
}

export default {
    get,
    list,
}
