import remark from 'remark'
import html from 'remark-html'
import footnotes from 'remark-footnotes'
import external from 'remark-external-links'
import smartypants from '@silvenon/remark-smartypants'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'

export async function toHTML(markdown: string): Promise<string> {
    const result = await remark()
        .use(smartypants)
        .use(footnotes, { inlineNotes: true })
        .use(external, { target: '_blank', rel: 'noopener noreferrer' })
        .use(slug)
        .use(headings, { behavior: 'wrap' })
        .use(html)
        .process(markdown)
    return result.toString()
}
