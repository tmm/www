import { useMount } from 'react-use'

import Subscribe from './subscribe'

const footnotes = async () => {
    const littlefoot = (await import('littlefoot')).default
    const buttonTemplate = `
        <button
            aria-controls="fncontent:<% id %>"
            aria-expanded="false"
            aria-label="Footnote <% number %>"
            class="littlefoot-footnote__button"
            id="<% reference %>"
            rel="footnote"
            title="See Footnote <% number %>"
        >
            <% number %>
        </button>
    `
    littlefoot({
        allowDuplicates: false,
        buttonTemplate,
    })
}

interface Props {
    title: string
    date: string
    html: string
}

const Post: React.FC<Props> = (props) => {
    useMount(() => footnotes())

    const header = `
        <header class="flex flex-col justify-between mb-4 md:flex-row">
            <h1 class="mb-0">${props.title}</h1>
            <time class="text-muted">${props.date}</time>
        </header>
    `
    return (
        <>
            <article
                dangerouslySetInnerHTML={{
                    __html: `${header}${props.html}`,
                }}
            />
            <Subscribe />
        </>
    )
}

export default Post
