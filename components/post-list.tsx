import { format } from 'date-fns'

import { Link } from '@/components'

type Props = {
    posts: Post[]
    year: string
    showYear?: boolean
}

export const PostList: React.FC<Props> = ({ posts, year, showYear }) => {
    return (
        <section className="mb-8" id={year}>
            {showYear && <h3 className="mb-2 mt-0">{year}</h3>}
            <ul className="list-none my-0 p-0 space-y-1">
                {posts.map((x) => (
                    <li key={x.frontmatter.slug}>
                        <Link
                            className="flex group items-baseline no-underline visited:text-muted"
                            href={x.frontmatter.slug}
                        >
                            <div className="group-hover:underline">
                                {x.frontmatter.title}
                            </div>
                            <hr className="border-dotted flex-1 m-0 mx-2" />
                            <div className="tabular-nums text-muted">
                                {format(new Date(x.frontmatter.date), 'MMM dd')}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
