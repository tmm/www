import { NextPage } from 'next'

import { Layout, Link } from '@/components'

const Page: NextPage = () => {
    const title = 'Colophon'
    return (
        <Layout title={title}>
            <article>
                <header className="mb-8">
                    <h1 className="mb-3">{title}</h1>
                </header>

                <p>
                    This website is built with{' '}
                    <Link external href="https://nextjs.org">
                        Next.js
                    </Link>{' '}
                    and typeset in{' '}
                    <Link
                        external
                        href="https://github.com/adobe-fonts/source-sans-pro"
                    >
                        Source Sans Pro
                    </Link>
                    . Other technologies, products, and doodads include:
                </p>

                <ul>
                    <li>
                        <Link external href="https://www.dynadot.com">
                            Dynadot
                        </Link>{' '}
                        for registering <code>meagher.co</code>
                    </li>
                    <li>
                        <Link external href="https://vercel.com">
                            Vercel
                        </Link>{' '}
                        for hosting
                    </li>
                    <li>
                        <Link external href="https://cloudflare.com">
                            Cloudflare
                        </Link>{' '}
                        for all DNS-related needs
                    </li>
                    <li>
                        <Link
                            external
                            href="https://referral.simpleanalytics.com/tmm"
                        >
                            Simple Analytics
                        </Link>{' '}
                        for collecting analytics
                    </li>
                </ul>

                <p>
                    My writing and the design of this website is{' '}
                    <Link
                        external
                        href="https://www.copyright.gov/help/faq/faq-general.html#mywork"
                    >
                        copyrighted
                    </Link>
                    . Feel free to ask if you want to reuse any content beyond
                    the bounds of{' '}
                    <Link
                        external
                        href="https://www.copyright.gov/fair-use/more-info.html"
                    >
                        fair use
                    </Link>
                    .
                </p>

                <p>
                    For more info on how the sausage is made, view the source{' '}
                    <Link external href="https://github.com/tmm/www">
                        on GitHub
                    </Link>
                    .
                </p>
            </article>
        </Layout>
    )
}

export default Page
