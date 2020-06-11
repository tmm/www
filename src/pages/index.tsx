import { PageProps, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'

import React, { FC } from 'react'

import Layout from '@/layouts/default'
import HomeLink from '@/components/home-link'
import CopyEmailButton from '@/components/copy-email-button'

interface Props extends PageProps {
    data: {
        allMdx: { edges: { node: Post }[] }
        site: {
            siteMetadata: {
                author: string
                home: {
                    presence: Presence[]
                    timeline: TimeEvent[]
                    people: Person[]
                    products: Product[]
                }
            }
        }
    }
}

const Index: FC<Props> = ({
    data: {
        allMdx: { edges: posts },
        site: {
            siteMetadata: {
                author,
                home: { presence, timeline, people, products },
            },
        },
    },
}) => {
    const presenceData = [
        ...presence.slice(0, 1),
        { name: 'Email', children: <CopyEmailButton /> },
        ...presence.slice(1, presence.length),
    ].sort((a, b) => (a.name > b.name ? 1 : 0))
    return (
        <Layout>
            <Helmet title="Tom Meagher" />
            <section className="mb-8 mt-12">
                <h1 className="font-medium leading-normal mb-3 text-heading">
                    {author}
                </h1>
                <p>
                    Hi, hello, welcome. My name is Tom and I’m an Internet
                    explorer currently headquartered in New York City via
                    Boston.
                </p>
                <p>
                    I’m a bit disenchanted with tech right now despite working
                    in it. Who isn’t these days? I’m optimistic things will get
                    better though.
                </p>
                <p>
                    Below is some more information and — more importantly —
                    links to click.
                </p>
            </section>
            <section className="mb-8">
                <h4 className="font-normal mb-2 text-heading">Presence</h4>
                <div>
                    {presenceData.map((x) => (
                        <HomeLink key={x.name} {...x} />
                    ))}
                </div>
            </section>
            <section className="mb-8">
                <h4 className="font-normal mb-2 text-heading">Writing</h4>
                <div>
                    {posts.map(
                        ({
                            node: {
                                id,
                                fields: { slug },
                                frontmatter: { date, title },
                            },
                        }: {
                            node: Post
                        }) => (
                            <HomeLink key={id} name={date} to={slug} truncate>
                                {title}
                            </HomeLink>
                        ),
                    )}
                </div>
            </section>
            <section className="mb-8">
                <h4 className="font-normal mb-2 text-heading">Timeline</h4>
                <div>
                    {timeline.map((x) => (
                        <HomeLink key={`${x.name}-${x.href}`} {...x} />
                    ))}
                </div>
            </section>
            <section>
                <p>
                    If you’ve made it this far, I would love to get to know you.
                    Send an email to <CopyEmailButton /> with the answer to
                    “What’s your favorite color?”
                </p>
                <p className="text-muted text-sm">
                    <b>Note:</b> No one ever does this. I would be soOoOo
                    thrilled if you did.
                </p>
                <p className="text-muted text-sm">
                    Some people I’m following:{' '}
                    {people.map((x, i) => (
                        <span key={x.name}>
                            <a href={x.href} key={x.name}>
                                {x.name}
                            </a>
                            {i !== people.length - 1 && ', '}
                        </span>
                    ))}
                </p>
                <p className="text-muted text-sm">
                    Products to check out:{' '}
                    {products.map((x, i) => (
                        <span key={x.name}>
                            <a href={x.href} key={x.name}>
                                {x.name}
                            </a>
                            {i !== products.length - 1 && ', '}
                        </span>
                    ))}
                </p>
                <p className="text-muted text-sm">
                    Built with <a href="https://www.gatsbyjs.org/">Gatsby</a>.
                    Deployed on <a href="https://vercel.com">Vercel</a>. View
                    source on <a href="https://github.com/tmm/www">GitHub</a>.
                    Subscribe via <a href="/rss.xml">RSS</a>.
                </p>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query PostsQuery {
        allMdx(
            filter: { frontmatter: { published: { eq: true } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MM.DD.YYYY")
                        description
                        title
                    }
                    id
                }
            }
        }
        site {
            siteMetadata {
                author
                email
                home {
                    presence {
                        name
                        children
                        href
                    }
                    timeline {
                        name
                        children
                        href
                    }
                    people {
                        name
                        href
                    }
                    products {
                        name
                        href
                    }
                }
            }
        }
    }
`

export default Index
