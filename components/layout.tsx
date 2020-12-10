import Head from './head'
import { Footer } from './footer'
import { Nav } from './nav'

type Props = {
    children: React.ReactNode
    description?: string
    hideFooter?: boolean
    hideNav?: boolean
    title?: string
}

export const Layout: React.FC<Props> = ({
    children,
    description,
    hideFooter = false,
    hideNav = false,
    title,
}) => {
    return (
        <>
            <Head description={description} title={title} />
            {!hideNav && <Nav />}
            <main className="pt-12">{children}</main>
            {!hideFooter && <Footer />}
        </>
    )
}
