import { GetStaticProps, NextPage } from 'next'
import { format } from 'date-fns'

import { CopyEmailButton, HomeLink, Layout, Link } from '@/components'
import rss from '@/lib/rss'
import _posts from '@/lib/posts'
import { config, events, followings, presences, products } from '@/data'

type Props = {
    posts: Post[]
    presences: Presence[]
    events: TimeEvent[]
    followings: Following[]
    products: Product[]
}

const Page: NextPage<Props> = (props) => {
    return (
        <Layout>
            <article>
                <section>
                    <h1>{config.title}</h1>
                    <p>
                        Hi, hello, welcome. My name is Tom and I’m a Internet
                        explorer living in Brooklyn via Boston. I like going for
                        walks and cooking up random ideas.
                    </p>
                    <p>
                        I’m a bit disenchanted with the tech industry despite
                        working in it. Who isn’t these days? I’m optimistic
                        things will get better though.
                    </p>
                    <p>
                        Below is some more information and — more importantly —
                        links to click.
                    </p>
                </section>

                <section className="mb-8">
                    <h4 className="font-normal">Presence</h4>
                    <div>
                        {[
                            ...props.presences.slice(0, 1),
                            {
                                name: 'Email',
                                children: <CopyEmailButton />,
                            },
                            ...props.presences.slice(1, props.presences.length),
                        ].map((x) => (
                            <HomeLink external key={x.name} {...x} />
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h4 className="font-normal">Writing</h4>
                    <div>
                        {props.posts.map((x) => (
                            <HomeLink
                                as={x.frontmatter.slug}
                                href="[slug]"
                                key={x.frontmatter.slug}
                                name={format(
                                    new Date(x.frontmatter.date),
                                    'MMM yyyy',
                                )}
                                truncate
                                value={x.frontmatter.title}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h4 className="font-normal">Timeline</h4>
                    <div>
                        {props.events.map((x) => (
                            <HomeLink external key={x.id ?? x.name} {...x} />
                        ))}
                    </div>
                </section>

                <section>
                    <p>
                        If you’ve made it this far, I would love to get to know
                        you. Send an email to <CopyEmailButton /> with the
                        answer to “What’s your favorite color?”
                    </p>

                    <p className="leading-normal mb-4 text-muted text-sm">
                        <b>Note:</b> No one ever does this. I would be thrilled
                        if you did.
                    </p>

                    <p className="leading-normal mb-4 text-muted text-sm">
                        People I’m following:{' '}
                        {props.followings.map((x, i) => (
                            <span key={x.name}>
                                <Link external href={x.href}>
                                    {x.name}
                                </Link>
                                {i !== followings.length - 1 && ', '}
                            </span>
                        ))}
                    </p>

                    <p className="leading-normal mb-4 text-muted text-sm">
                        Products to check out:{' '}
                        {props.products.map((x, i) => (
                            <span key={x.name}>
                                <Link external href={x.href}>
                                    {x.name}
                                </Link>
                                {i !== products.length - 1 && ', '}
                            </span>
                        ))}
                    </p>
                </section>
            </article>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = _posts.list()
    await rss.generate(posts)
    return {
        props: {
            posts,
            presences,
            config,
            events,
            followings,
            products,
        },
    }
}

export default Page
