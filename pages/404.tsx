import { NextPage } from 'next'

import { Layout, Link } from '@/components'

const Page: NextPage = () => {
    const title = 'Page Not Found'
    return (
        <Layout hideFooter title={title}>
            <article>
                <header className="mb-8">
                    <h1>{title}</h1>
                </header>
                <p>
                    Back to <Link href="/">home</Link>
                </p>
            </article>
        </Layout>
    )
}

export default Page
