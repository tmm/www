import React, { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { graphql, useStaticQuery } from 'gatsby'
import sa from 'gatsby-plugin-simple-analytics'

const CopyEmailButton = ({ email }) => {
    const {
        site: {
            siteMetadata: { email: defaultEmail },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `)
    const value = email ?? defaultEmail
    const [copied, setCopied] = useState(false)
    const [state, copyToClipboard] = useCopyToClipboard()

    const copyEmail = () => {
        sa('click_copy_email')
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
                className="underline hover:text-accent"
                title="Click to copy"
                onClick={copyEmail}
            >
                {value}
            </button>
            {copied && (
                <span
                    className="
                        absolute
                        bg-background
                        border
                        px-2
                        py-2
                        rounded-sm
                        shadow
                        text-heading
                        text-sm
                        whitespace-no-wrap
                        z-10
                    "
                    style={{
                        bottom: '1.45rem',
                        left: '50%',
                        paddingBottom: '2px',
                        paddingTop: '2px',
                        transform: 'translate(-50%, 0)',
                    }}
                >
                    Copied to clipboard!
                </span>
            )}
        </span>
    )
}

export default CopyEmailButton
