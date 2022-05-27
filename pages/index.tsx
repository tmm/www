import Head from 'next/head'

function Page() {
  return (
    <>
      <Head>
        <title>awkweb</title>
        <meta name="description" content="awkweb is a computer programmer based in Brooklyn." />
      </Head>

      <main>
        <p>
          Tom is a programmer based in Brooklyn.
        </p>
        <p className="muted">
          <a href="https://github.com/tmm">GitHub</a>{' '}
          <a href="https://twitter.com/awkweb">Twitter</a>{' '}
          <a href="mailto:tmm@awkweb.com">Email</a>{' '}
        </p>
      </main>
    </>
  )
}

export default Page
