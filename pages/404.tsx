import { NextPage } from 'next'

import { Layout, Link } from '@/components'

const Page: NextPage = () => {
    const title = 'Page Not Found'
    return (
        <Layout title={title}>
            <article>
                <h1>{title}</h1>
                <p>
                    <Link href="/">Home</Link>
                </p>
            </article>
        </Layout>
    )
}

export default Page
