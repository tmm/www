import { NextPage } from 'next'

import { Layout } from '@/components'

const Page: NextPage = () => {
    return (
        <Layout
            className="max-w-container mx-auto pt-36 px-4 space-y-36"
            title="About"
        >
            <article>
                <header className="mb-8">
                    <h1 className="font-normal mb-0 text-base text-center">
                        About Tom
                    </h1>
                </header>
                <p>Image and some info about Tom</p>
            </article>

            <article>
                <header className="mb-8">
                    <h1 className="font-normal mb-0 text-base text-center">
                        About This Site
                    </h1>
                </header>
                <p>Tech and inspiration</p>
            </article>
        </Layout>
    )
}

export default Page
