import Head from './head'
import { Footer } from './footer'

type Props = {
    children: React.ReactNode
    description?: string
    hideFooter?: boolean
    title?: string
}

export const Layout: React.FC<Props> = ({
    children,
    description,
    hideFooter = false,
    title,
}) => {
    return (
        <>
            <Head description={description} title={title} />
            <main className="pt-28">{children}</main>
            {!hideFooter && <Footer />}
        </>
    )
}
