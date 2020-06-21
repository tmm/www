import { Link } from 'gatsby'

import React, { FC } from 'react'

interface Props {}

const Footer: FC<Props> = () => {
    return (
        <footer className="mt-5 text-muted text-sm">
            <Link className="mr-3" to="/">
                Home
            </Link>
            <Link className="mr-3" to="/colophon">
                Colophon
            </Link>
            <a href="/rss.xml">RSS</a>
        </footer>
    )
}

export default Footer
