import React, { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { graphql, useStaticQuery } from 'gatsby'

const CopyEmailButton = () => {
    const {
        site: {
            siteMetadata: { email },
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
    const [copied, setCopied] = useState(false)
    const [state, copyToClipboard] = useCopyToClipboard()
    const copyEmail = () => {
        copyToClipboard(email)
    }
    useEffect(() => {
        if (state.value) {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }, [state])
    return (
        <button
            className="underline hover:text-accent"
            title="Click to copy"
            onClick={copyEmail}
        >
            {copied ? 'Copied to clipboard!' : email}
        </button>
    )
}

export default CopyEmailButton
