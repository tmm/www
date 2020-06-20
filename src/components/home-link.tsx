import { Link } from 'gatsby'

import React, { FC, ReactNode } from 'react'

interface Props {
    name: string
    href?: string
    to?: string
    value?: string
    children?: ReactNode
    truncate?: boolean
}

const HomeLink: FC<Props> = (props) => {
    const { href, to, children, value } = props

    let action
    if (href) {
        action = (
            <a href={href} rel="noopener noreferrer" target="_blank">
                {value}
            </a>
        )
    } else if (to) {
        action = <Link to={to}>{children}</Link>
    } else {
        action = children
    }

    return (
        <div
            className={`
                ${props.truncate ? 'truncate whitespace-no-wrap' : ''}
            `}
        >
            <div
                className="
                    font-medium
                    inline-block
                    text-muted
                    text-sm
                    w-full
                    max-w-item
                    mr-3
                    md:mr-6
                "
            >
                {props.name}
            </div>
            {action}
        </div>
    )
}

export default HomeLink
