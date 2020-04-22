/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'gatsby'
import sa from 'gatsby-plugin-simple-analytics'

const HomeLink = ({ name, href, to, children, truncate = false }) => {
    const click = () => sa(`click_home_${name}`)
    let action
    if (href) {
        action = (
            <a href={href} rel="noopener" target="_blank" onClick={click}>
                {children}
            </a>
        )
    } else if (to) {
        action = (
            <Link to={to} onClick={click}>
                {children}
            </Link>
        )
    } else {
        action = children
    }
    return (
        <div
            className={truncate ? 'truncate whitespace-no-wrap' : null}
            style={{ marginBottom: '1px' }}
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
                {name}
            </div>
            {action}
        </div>
    )
}

export default HomeLink
