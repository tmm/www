import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import { format } from 'date-fns'
import { useMount } from 'react-use'

import { footnotes } from '@/lib/littlefoot'
import { Link, mdx } from '@/components'

type Props = {
    body: string
    date: Date
    hideHead?: boolean
    published: boolean
    slug: string
    title: string
}

export const Post: React.FC<Props> = ({
    body,
    date,
    hideHead = false,
    published,
    slug,
    title,
}) => {
    useMount(() => setTimeout(footnotes, 250))

    const content = hydrate(body, {
        components: mdx,
    })

    return (
        <>
            {hideHead && (
                <Head>
                    <meta content={date.toString()} name="date" />
                </Head>
            )}

            <article id={slug}>
                <header className="mb-8">
                    <Link
                        className="no-underline hover:underline hover:text-muted"
                        href={slug}
                    >
                        <h1 className="mb-3">{title}</h1>
                    </Link>
                    <div className="text-muted text-sm">
                        {published ? (
                            <>
                                Published{' '}
                                <time dateTime={date.toString()}>
                                    {format(date, 'MMMM dd, yyyy')}
                                </time>
                            </>
                        ) : (
                            'Draft: Please do not share'
                        )}
                    </div>
                </header>

                {content}
            </article>
        </>
    )
}
