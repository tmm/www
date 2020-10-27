import remark from 'remark'
import html from 'remark-html'
import footnotes from 'remark-footnotes'
import external from 'remark-external-links'
import smartypants from '@silvenon/remark-smartypants'

async function toHTML(markdown: string): Promise<string> {
    const result = await remark()
        .use(smartypants)
        .use(footnotes, { inlineNotes: true })
        .use(external, { target: '_blank', rel: 'noopener noreferrer' })
        .use(html)
        .process(markdown)
    return result.toString()
}

export default {
    toHTML,
}
