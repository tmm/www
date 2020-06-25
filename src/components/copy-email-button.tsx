import { useCopyToClipboard } from 'react-use'
import { graphql, useStaticQuery } from 'gatsby'

import React, { FC, useEffect, useState } from 'react'

interface Props {
    email?: string
}

const CopyEmailButton: FC<Props> = (props) => {
    const query = graphql`
        query {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `
    const data = useStaticQuery(query)
    const value = props.email ?? data.site.siteMetadata.email
    const [copied, setCopied] = useState(false)
    const [state, copyToClipboard] = useCopyToClipboard()

    const copyEmail = () => {
        copyToClipboard(value)
    }

    useEffect(() => {
        if (state.value) {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        }
    }, [state])

    return (
        <span className="inline-block relative">
            <button
                className="underline hover:text-accent text-decoration-color"
                title="Click to copy"
                onClick={copyEmail}
            >
                {value}
            </button>
            <span
                className={`
                    absolute
                    bg-background
                    border
                    duration-200
                    px-2
                    py-2
                    rounded-sm
                    shadow
                    text-heading
                    text-sm
                    transform
                    transition-all
                    -translate-x-1/2
                    whitespace-no-wrap
                    z-10
                    ${
                        copied
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 translate-y-2 invisible'
                    }
                `}
                style={{
                    bottom: '1.5rem',
                    left: '50%',
                    paddingBottom: '2px',
                    paddingTop: '2px',
                }}
            >
                Copied to clipboard!
            </span>
        </span>
    )
}

export default CopyEmailButton
