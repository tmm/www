import { NextPage } from 'next'
import { add, format } from 'date-fns'

import { Layout, Link } from '@/components'

const Page: NextPage = () => {
    const title = 'Now'
    const date = add(new Date('2020-12-28'), { days: 1 })
    return (
        <Layout title={title}>
            <article>
                <header className="mb-8">
                    <h1 className="mb-3">{title}</h1>
                    <div className="text-muted text-sm">
                        Updated{' '}
                        <time dateTime={date.toString()}>
                            {format(date, 'MMMM dd, yyyy')}
                        </time>
                    </div>
                </header>

                <ul>
                    <li>
                        Learning more about{' '}
                        <Link
                            external
                            href="https://www.are.na/tmm/a11y-fvzzdye9l_c"
                        >
                            a11y
                        </Link>
                    </li>
                    <li>
                        Reading{' '}
                        <Link
                            external
                            href="https://bookshop.org/books/dune-9780441005901/9780441172719"
                        >
                            <em>Dune</em>
                        </Link>
                    </li>
                    <li>
                        Listening to{' '}
                        <Link
                            external
                            href="https://lane8.bandcamp.com/album/brightest-lights"
                        >
                            <em>Brightest Lights</em>
                        </Link>
                    </li>
                    <li>
                        Cooking{' '}
                        <Link href="https://www.indianhealthyrecipes.com/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/">
                            Palak Paneer
                        </Link>
                    </li>
                    <li>
                        Starting to <Link href="/archive">blog</Link> again
                    </li>
                </ul>
            </article>
        </Layout>
    )
}

export default Page
