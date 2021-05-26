import { NextPageWithLayout } from 'next'

import { Clock } from '~/components'
import { getLayout } from '~/layouts/site'

const Page: NextPageWithLayout = () => {
    return (
        <main>
            <nav>
                <div>
                    <Clock />
                </div>
            </nav>

            <article>
                <header>
                    <h1>Tom Meagher</h1>
                </header>

                <section>
                    <p>
                        Welcome — I&rsquo;m Tom, a Brooklyn-based software
                        engineer.
                    </p>
                </section>
            </article>
        </main>
    )
}

Page.getLayout = getLayout

export default Page
