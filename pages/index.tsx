import { NextPageWithLayout } from 'next'

import { Link } from '~/components'
import { getLayout } from '~/layouts/site'
import { config } from '~/lib/config'

const Page: NextPageWithLayout = () => {
    return (
        <main className="max-w-lg pt-20 px-4 md:ml-20">
            <article className="space-y-6">
                <h1 className="font-display">Tom Meagher</h1>

                <p>
                    I&rsquo;m a Brooklyn based software engineer interested in
                    funding models for art and work, developer experience and
                    tools, meta learning, and walking.
                </p>

                <p>
                    Sometimes I work on consulting projects for select clients.
                    To work with me or learn more, drop a note to {config.email}
                    .
                </p>

                <p>
                    <Link external href="https://are.na/tmm">
                        Are.na
                    </Link>{' '}
                    <Link external href={`mailto:${config.email}`}>
                        Email
                    </Link>{' '}
                    <Link external href="https://futureland.tv/tmm">
                        Futureland
                    </Link>{' '}
                    <Link external href="https://github.com/tmm">
                        GitHub
                    </Link>{' '}
                    <Link
                        external
                        href={`https://twitter.com/${config.twitter}`}
                    >
                        Twitter
                    </Link>
                </p>
            </article>
        </main>
    )
}

Page.getLayout = getLayout

export default Page
