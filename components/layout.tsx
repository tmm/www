import { Clock } from './clock'
import { Nav } from './nav'
import { Footer } from './footer'
import { Head } from './head'

type Props = {
    children: React.ReactNode
    description?: string
    hideNav?: boolean
    hideFooter?: boolean
    title?: string
}

export const Layout: React.FC<Props> = ({
    children,
    description,
    title,
    hideNav = false,
    hideFooter = false,
}) => {
    return (
        <>
            <Head description={description} title={title} />
            {!hideNav && <Nav />}
            <Clock />
            <main className="max-w-container mx-auto pt-36 px-4">
                {children}
                {!hideFooter && <Footer />}
            </main>
        </>
    )
}
