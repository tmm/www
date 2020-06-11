import { useInterval } from 'react-use'

import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Layout from '@/layouts/default'

const V = () => {
    const [version, setVersion] = useState('00.000.000000')

    useInterval(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const days = now.getDate()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()

        const today = new Date(year, month, days)
        const birth = new Date(1993, 1, 4)
        const ms = (today as any) - (birth as any)

        const s = Math.floor(ms / 1000)
        const m = Math.floor(s / 60)
        const h = Math.floor(m / 60)
        let d = Math.floor(h / 24)
        const y = Math.floor(d / 365)
        d = d % 365

        const major = `${y}`
        const minor = `${d < 100 ? `0` : ``}${d < 10 ? `0` : ``}${d}`
        const patch = `${hours < 10 ? `0` : ``}${hours}${
            minutes < 10 ? `0` : ``
        }${minutes}${seconds < 10 ? `0` : ``}${seconds}`

        setVersion(`${major}.${minor}.${patch}`)
    })

    return (
        <Layout>
            <Helmet title={version} />
            <section className="mb-8 mt-12">
                <h1 className="font-normal leading-normal mb-3 text-heading">
                    {version}
                </h1>
                <p>Money is circulated, time is spent.</p>
            </section>
        </Layout>
    )
}

export default V
