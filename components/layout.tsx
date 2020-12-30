import { Clock } from './clock'
import { Nav } from './nav'
import { Head } from './head'
import { Support } from './support'

type Props = {
    children: React.ReactNode
    description?: string
    hideNav?: boolean
    hideFooter?: boolean
    showTipButton?: boolean
    title?: string
}

export const Layout: React.FC<Props> = ({
    children,
    description,
    title,
    hideNav = false,
    hideFooter = false,
    showTipButton = false,
}) => {
    return (
        <>
            <Head description={description} title={title} />
            {!hideNav && <Nav />}
            <Clock />
            <main className="max-w-container mx-auto pt-36 px-4">
                {children}

                {!hideFooter && (
                    <footer className="mt-40 pb-64 print:hidden">
                        <Support showTipButton={showTipButton} />
                    </footer>
                )}
            </main>
        </>
    )
}
