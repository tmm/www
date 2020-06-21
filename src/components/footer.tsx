import { Link } from 'gatsby'

import React, { FC } from 'react'

import Subscribe from './subscribe'

interface Props {
    subscribe?: boolean
}

const Footer: FC<Props> = (props) => {
    return (
        <>
            {props.subscribe && <Subscribe />}

            <footer className="duration-200 mt-5 opacity-50 text-muted text-sm transition-opacity hover:opacity-100">
                <Link className="mr-3" to="/">
                    Home
                </Link>
                <Link className="mr-3" to="/colophon">
                    Colophon
                </Link>
                <a className="mr-3" href="/rss.xml">
                    RSS
                </a>
                <a href="https://buttondown.email/tmm">Newsletter</a>
            </footer>
        </>
    )
}

export default Footer
