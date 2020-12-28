import { NextPage } from 'next'

import { Layout, Link } from '@/components'
import { config } from '@/lib/config'

const Page: NextPage = () => {
    return (
        <Layout hideFooter>
            <article>
                <header className="mb-8">
                    <h1>Tom Meagher</h1>
                </header>
                <p>
                    Welcome — I&rsquo;m Tom, a Brooklyn-based software engineer.
                    Currently, I work at{' '}
                    <Link external href="https://locallaboratory.com">
                        Local Laboratory
                    </Link>
                    . Read more <Link href="/about">about me</Link>, browse{' '}
                    <Link href="/archive">the archive</Link>, drop me{' '}
                    <Link external href={`mailto:${config.email}`}>
                        a note
                    </Link>
                    , or see what I&rsquo;m up to <Link href="/now">now</Link>.
                </p>
            </article>
        </Layout>
    )
}

export default Page
