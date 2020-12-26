import { sub } from 'date-fns'
import RSS from 'rss'

import { config } from '@/lib/config'

import fs from 'fs'
import { join } from 'path'

export async function generateFeed(posts: Post[]) {
    const feed = new RSS({
        title: config.title,
        description: config.description,
        feed_url: `https://${config.url}/rss.xml`,
        site_url: config.url,
        image_url: `https://${config.url}/og.png`,
        language: 'en',
    })

    posts.forEach((x) => {
        const url = `https://${config.url}/${x.frontmatter.slug}`
        const date = sub(new Date(x.frontmatter.date), { days: 1 })
        feed.item({
            title: x.frontmatter.title,
            description: x.body ?? '',
            date,
            author: config.author,
            url,
            guid: url,
        })
    })

    const path = join(process.cwd(), 'public', 'rss.xml')
    const rss = feed.xml({ indent: true })
    fs.writeFileSync(path, rss)
}
