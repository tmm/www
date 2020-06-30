import React, { FC, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Provider } from '@/store'
import { CodeBlock, CopyEmailButton, Figure } from '@/components'

interface Props {
    element: ReactNode
}

const shortcodes = { code: CodeBlock, CopyEmailButton, Figure }

const Wrapper: FC<Props> = (props) => {
    return (
        <MDXProvider components={shortcodes}>
            <Provider>{props.element}</Provider>
        </MDXProvider>
    )
}

export default Wrapper
