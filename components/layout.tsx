import Head from './head'
import Footer from './footer'

type Props = {
    title?: string
    description?: string
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
    return (
        <>
            <Head description={props.description} title={props.title} />
            <main className="pt-20">{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
