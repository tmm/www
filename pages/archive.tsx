import { GetStaticProps, NextPage } from 'next'
import groupBy from 'lodash.groupby'

import { Layout, PostList } from '@/components'
import { getPosts } from '@/lib/posts'

type Props = {
    postsByYear: { [key: string]: Post[] }
}

const Page: NextPage<Props> = ({ postsByYear }) => {
    const title = 'Archive'
    const currentYear = new Date().getFullYear().toString()
    return (
        <Layout className="max-w-container mx-auto pt-36 px-4" title={title}>
            <header className="mb-8">
                <h1 className="font-normal mb-0 text-base text-center">
                    {title}
                </h1>
            </header>

            {Object.entries(postsByYear)
                .sort(([a], [b]) => parseInt(b) - parseInt(a))
                .map(([key, val]) => (
                    <PostList
                        key={key}
                        posts={val}
                        showYear={key !== currentYear}
                        year={key}
                    />
                ))}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()
    const postsByYear = groupBy(posts, (x: Post) =>
        new Date(x.frontmatter.date).getFullYear(),
    )
    return {
        props: {
            postsByYear,
        },
    }
}

export default Page
