export const footnotes = async () => {
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
        numberResetSelector: 'article',
        buttonTemplate,
    })
}
