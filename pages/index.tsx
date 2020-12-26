import { GetStaticProps, NextPage } from 'next'
import { format } from 'date-fns'
import { useMount } from 'react-use'

import { Layout, Link, Post } from '@/components'
import { generateFeed } from '@/lib/rss'
import { getPosts } from '@/lib/posts'
import { config } from '@/lib/config'
import { footnotes } from '@/lib/littlefoot'

type Props = {
    posts: Post[]
}

const Page: NextPage<Props> = (props) => {
    useMount(() => setTimeout(footnotes, 150))

    return (
        <Layout className="max-w-container mx-auto pt-36 px-4 space-y-36">
            <header>
                <p className="font-sans">
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
            </header>

            {props.posts.map((x) => (
                <Post
                    {...x.frontmatter}
                    body={x.body ?? ''}
                    date={format(
                        new Date(x.frontmatter.date),
                        'EEE MMM dd yyyy',
                    )}
                    hideHead
                    key={x.frontmatter.slug}
                />
            ))}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts({ includeContent: true })
    await generateFeed(posts)
    return {
        props: {
            posts,
        },
    }
}

export default Page
