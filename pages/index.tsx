import { GetStaticProps, NextPage } from 'next'
import { useMount } from 'react-use'

import { Layout, Link } from '@/components'

import { generateFeed } from '@/lib/rss'
import { getPosts } from '@/lib/posts'
import { footnotes } from '@/lib/littlefoot'
import { config } from '@/lib/config'

type Props = {
    posts: Post[]
}

const Page: NextPage<Props> = (props) => {
    useMount(() => footnotes())
    return (
        <Layout className="max-w-container mx-auto pt-36 px-4 space-y-36">
            <header>
                <p className="font-sans">
                    Hi, hello, welcome. My name is Tom. I’m a software engineer
                    living in Brooklyn, working at{' '}
                    <Link external href="/">
                        Local Laboratory
                    </Link>
                    , trying to make bad technology good. Read more{' '}
                    <Link href="/about">about me</Link>, browse{' '}
                    <Link href="/archive">the archive</Link>, drop me{' '}
                    <Link external href={`mailto:${config.email}`}>
                        a note
                    </Link>
                    , or see what I’m up to <Link href="/now">now</Link>.
                </p>
            </header>

            {props.posts.map((x) => (
                <article key={x.frontmatter.title}>
                    <header className="mb-8">
                        <Link
                            className="no-underline hover:underline"
                            href={x.frontmatter.slug}
                        >
                            <h1 className="font-normal mb-0 text-base text-center">
                                {x.frontmatter.title}
                            </h1>
                        </Link>
                    </header>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: `${x.body}`,
                        }}
                    />
                </article>
            ))}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()
    await generateFeed(posts)
    return {
        props: {
            posts,
        },
    }
}

export default Page
