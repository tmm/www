import { config } from '@/lib/config'

import { Link } from './link'

export const Footer: React.FC = () => {
    return (
        <footer className="flex border-t mt-20 pt-8">
            <section className="flex md:flex-row flex-col font-medium text-muted text-sm space-y-2 md:space-y-0 md:space-x-3">
                <Link className="no-link" href="/">
                    Home
                </Link>
                <Link className="no-link" href="/archive">
                    Archive
                </Link>
                <Link className="no-link" href="/about">
                    About
                </Link>
                <Link className="no-link" external href="/rss.xml">
                    RSS
                </Link>
                <Link
                    className="no-link"
                    external
                    href={`mailto:${config.email}`}
                >
                    Email
                </Link>
                <Link
                    className="no-link"
                    external
                    href={`https://twitter.com/${config.twitter}`}
                >
                    Twitter
                </Link>
            </section>
        </footer>
    )
}
