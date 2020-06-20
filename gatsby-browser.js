import littlefoot from 'littlefoot'

import '@/styles/global.css'
import Wrapper from '@/components/wrapper'

export const wrapRootElement = Wrapper

export function onRouteUpdate() {
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
