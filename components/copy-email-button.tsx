import { useCopyToClipboard } from 'react-use'

import { useEffect, useState } from 'react'

import { config } from '@/data'

interface Props {
    value?: string
}

const CopyEmailButton: React.FC<Props> = (props) => {
    const value = props.value ?? config.email
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
                className="leading-tight hover:text-accent underlined"
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
                    border-border
                    duration-200
                    px-2
                    py-2
                    rounded-sm
                    select-none
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
                    copied-popover
                `}
            >
                Copied to clipboard!
            </span>
        </span>
    )
}

export default CopyEmailButton
