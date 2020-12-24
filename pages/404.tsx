import { NextPage } from 'next'

import { Layout, Link } from '@/components'

const Page: NextPage = () => {
    const title = 'Page Not Found'
    return (
        <Layout className="max-w-container mx-auto pt-36 px-4" title={title}>
            <article>
                <header className="mb-8">
                    <h1 className="font-normal mb-0 text-base text-center">
                        {title}
                    </h1>
                </header>
                <p>
                    Back to <Link href="/">home</Link>
                </p>
            </article>
        </Layout>
    )
}

export default Page
