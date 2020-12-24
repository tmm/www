import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'

import { Link, mdx } from '@/components'

type Props = {
    body: string
    date: string
    hideHead?: boolean
    slug: string
    title: string
}

export const Post: React.FC<Props> = ({
    body,
    date,
    hideHead = false,
    slug,
    title,
}) => {
    const content = hydrate(body, {
        components: mdx,
    })

    return (
        <>
            {hideHead && (
                <Head>
                    <meta content={date} name="date" />
                </Head>
            )}

            <article id={slug}>
                <header className="mb-8">
                    <Link
                        className="no-underline hover:underline hover:text-body"
                        href={slug}
                    >
                        <h1 className="font-normal mb-0 text-base text-center">
                            {title}
                        </h1>
                    </Link>
                </header>

                {content}
            </article>
        </>
    )
}
