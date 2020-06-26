/* eslint-disable react/no-array-index-key */
import Highlight, { Language, defaultProps } from 'prism-react-renderer'

import React, { FC } from 'react'

interface Props {
    children: string
    className: string
}

const CodeBlock: FC<Props> = (props) => {
    const language = props.className.replace(/language-/, '')

    return (
        <Highlight
            {...defaultProps}
            code={props.children?.trim()}
            language={language as Language}
            theme={undefined}
        >
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <pre className={className}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export default CodeBlock
