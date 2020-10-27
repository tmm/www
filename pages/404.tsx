import { NextPage } from 'next'

import { Layout, Link } from '@/components'

type Props = {}

const Page: NextPage<Props> = () => {
    const title = 'Page Not Found'
    return (
        <Layout title={title}>
            <article>
                <h1>{title}</h1>
                <p>
                    You might be looking for an{' '}
                    <Link external href="https://github.com/tmm-archive">
                        archived project
                    </Link>
                    , my{' '}
                    <Link
                        external
                        href="https://github.com/tmm/www/tree/e1a673aab9fdcaa4889195db4dc1de59de123b82/blog/_posts"
                    >
                        old blog
                    </Link>
                    , or something else that is no longer here.
                </p>
            </article>
        </Layout>
    )
}

export default Page
