import Head from 'next/head'

type Props = {
    title: string
    date: string
    body: string
}

export const Post: React.FC<Props> = (props) => {
    const header = `
        <header class="mb-8">
            <h1 class="font-normal text-base text-center">${props.title} — ${props.date}</h1>
        </header>
    `
    return (
        <>
            <Head>
                <meta content={props.date} name="date" />
            </Head>
            <article
                dangerouslySetInnerHTML={{
                    __html: `${header}${props.body}`,
                }}
            />
        </>
    )
}
