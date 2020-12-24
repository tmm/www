import { Footer } from './footer'
import Head from './head'

type Props = {
    children: React.ReactNode
    className?: string
    description?: string
    title?: string
}

export const Layout: React.FC<Props> = ({
    children,
    className,
    description,
    title,
}) => {
    return (
        <>
            <Head description={description} title={title} />
            <main className={className}>
                {children}
                <Footer />
            </main>
        </>
    )
}
