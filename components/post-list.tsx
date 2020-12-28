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
            <ul className="my-0 p-0 space-y-6">
                {posts.map((x) => (
                    <li className="bg-none pl-0 mb-0" key={x.frontmatter.slug}>
                        <Link
                            className="block no-underline"
                            href={x.frontmatter.slug}
                        >
                            <div className="font-medium text-muted text-sm">
                                {format(
                                    new Date(x.frontmatter.date),
                                    'MMMM dd',
                                )}
                            </div>
                            <div className="font-bold text-lg">
                                {x.frontmatter.title}
                            </div>
                            <div className="text-muted truncate">
                                {x.frontmatter.description}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
