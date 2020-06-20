import { PageProps, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'

import React, { FC } from 'react'

import Layout from '@/layouts/default'
import HomeLink from '@/components/home-link'
import CopyEmailButton from '@/components/copy-email-button'

interface Props extends PageProps {
    data: {
        site: {
            siteMetadata: {
                author: string
            }
        }
        allMdx: { posts: Post[] }
        allPresenceJson: { presences: Presence[] }
        allTimelineJson: { events: TimeEvent[] }
        allFollowingsJson: { followings: Person[] }
        allProductsJson: { products: Product[] }
    }
}

const Index: FC<Props> = (props) => {
    const {
        data: {
            site: {
                siteMetadata: { author },
            },
            allMdx: { posts },
            allPresenceJson: { presences: presenceData },
            allTimelineJson: { events },
            allFollowingsJson: { followings },
            allProductsJson: { products },
        },
    } = props

    const emailPresence = {
        id: 'email',
        name: 'Email',
        children: <CopyEmailButton />,
    }
    const presences = [
        ...presenceData.slice(0, 1),
        emailPresence,
        ...presenceData.slice(1, presenceData.length),
    ]

    return (
        <Layout>
            <Helmet title={author} />

            <section className="mb-8 mt-20">
                <h1 className="mb-4">{author}</h1>
                <p>
                    Hi, hello, welcome. My name is Tom and I’m a Internet
                    explorer headquartered in New York City via Boston.
                </p>
                <p>
                    I’m a bit disenchanted with the tech industry despite
                    working in it. Who isn’t these days? I’m optimistic things
                    will get better though.
                </p>
                <p>
                    Below is some more information and — more importantly —
                    links to click.
                </p>
            </section>

            <section className="mb-8">
                <h4 className="font-normal">Presence</h4>
                <div>
                    {presences.map((x) => (
                        <HomeLink key={x.id} {...x} />
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h4 className="font-normal">Writing</h4>
                <div>
                    {posts.map((x) => (
                        <HomeLink
                            key={x.id}
                            name={x.frontmatter.date}
                            to={x.fields.slug}
                            truncate
                        >
                            {x.frontmatter.title}
                        </HomeLink>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h4 className="font-normal">Timeline</h4>
                <div>
                    {events.map((x) => (
                        <HomeLink key={x.id} {...x} />
                    ))}
                </div>
            </section>

            <section>
                <p>
                    If you’ve made it this far, I would love to get to know you.
                    Send an email to <CopyEmailButton /> with the answer to
                    “What’s your favorite color?”
                </p>
                <p className="leading-normal text-muted text-sm">
                    <b>Note:</b> No one ever does this. I would be thrilled if
                    you did.
                </p>
                <p className="leading-normal text-muted text-sm">
                    People I’m following:{' '}
                    {followings.map((x, i) => (
                        <span key={x.id}>
                            <a href={x.href} key={x.name}>
                                {x.name}
                            </a>
                            {i !== followings.length - 1 && ', '}
                        </span>
                    ))}
                </p>
                <p className="leading-normal text-muted text-sm">
                    Products to check out:{' '}
                    {products.map((x, i) => (
                        <span key={x.id}>
                            <a href={x.href} key={x.name}>
                                {x.name}
                            </a>
                            {i !== products.length - 1 && ', '}
                        </span>
                    ))}
                </p>
                <p className="leading-normal text-muted text-sm">
                    Colophon: Typeset in{' '}
                    <a href="https://rsms.me/inter">Inter</a>, built with{' '}
                    <a href="https://gatsbyjs.org">Gatsby</a>, deployed on{' '}
                    <a href="https://vercel.com">Vercel</a>, licensed under the{' '}
                    <a href="https://github.com/tmm/www/blob/master/.github/LICENSE.md">
                        MIT License
                    </a>
                    , view source on{' '}
                    <a href="https://github.com/tmm/www">GitHub</a>, subscribe
                    via <a href="/rss.xml">RSS</a>.
                </p>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query IndexPage {
        site {
            siteMetadata {
                author
            }
        }

        allMdx(
            filter: { frontmatter: { published: { eq: true } } }
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            posts: nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMM YYYY")
                    description
                    title
                }
            }
        }

        allPresenceJson {
            presences: nodes {
                id
                name
                value
                href
            }
        }

        allTimelineJson {
            events: nodes {
                id
                name
                value
                href
            }
        }

        allFollowingsJson {
            followings: nodes {
                id
                name
                href
            }
        }

        allProductsJson {
            products: nodes {
                id
                name
                href
            }
        }
    }
`

export default Index
