import { config } from '@/lib/config'

import { Link } from './link'

export const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center mt-28">
            <section className="font-medium text-muted text-sm space-x-3">
                <Link className="no-link" href="/">
                    Home
                </Link>
                <Link className="no-link" href="/colophon">
                    Colophon
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
                <Link
                    className="no-link"
                    external
                    href={`https://twitter.com/${config.github}`}
                >
                    GitHub
                </Link>
            </section>
        </footer>
    )
}
