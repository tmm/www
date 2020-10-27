import { sub } from 'date-fns'

import RSS from 'rss'

import { config } from '@/data'

import fs from 'fs'
import { join } from 'path'
import markdown from './markdown'

async function generate(posts: Post[]) {
    const feed = new RSS({
        title: config.title,
        description: config.description,
        feed_url: `https://${config.url}/rss.xml`,
        site_url: config.url,
        image_url: `https://${config.url}/og.png`,
        language: 'en',
    })

    const promises = posts.map((x) => markdown.toHTML(x.body))
    const html = await Promise.all(promises)

    posts.forEach((x, i) => {
        const url = `https://${config.url}/${x.frontmatter.slug}`
        const date = sub(new Date(x.frontmatter.date), { days: 1 })
        feed.item({
            title: x.frontmatter.title,
            description: html[i],
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

export default {
    generate,
}
