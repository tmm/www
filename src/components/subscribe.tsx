import React, { FC, FormEvent, useEffect, useState } from 'react'
import { useLocation } from '@reach/router'

const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/

const Subscribe: FC = () => {
    const { pathname } = useLocation()
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState<string | any>('')

    useEffect(() => {
        setIsValid(!!email && emailRegex.test(email))
    }, [email])

    const handleChange = (event: FormEvent) => {
        setEmail((event.target as HTMLInputElement).value)
        if (isError) {
            setIsError(false)
            setMessage('')
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        try {
            setIsError(false)
            setIsLoading(true)

            const endpoint = 'https://api.buttondown.email/v1/subscribers'
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Token ${process.env.GATSBY_BUTTONDOWN_API_KEY}`,
            }
            const body = { email, referrer_url: pathname }
            const response = await fetch(endpoint, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            })

            if (response.ok) {
                setMessage(
                    <div>
                        Subscribed{' '}
                        <span className="border-b border-dotted border-accent text-accent">
                            {email}
                        </span>
                    </div>,
                )
                setEmail('')
            } else {
                const data = await response.json()
                const message = data?.[0] ?? 'Something went wrong'
                setIsError(true)
                setMessage(message)
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form
            className="
                duration-200
                mt-20
                transition-opacity
                md:opacity-50
                hover:opacity-100
                focus-within:opacity-100
            "
            onSubmit={handleSubmit}
        >
            <div className="mb-1 text-muted">
                Get a email when I publish new posts
            </div>

            <div className="flex">
                <label className="hidden" htmlFor="email">
                    Email
                </label>
                <input
                    className="
                        bg-transparent
                        border-b
                        outline-none
                        placeholder-muted
                        pr-2
                        focus:border-muted
                    "
                    disabled={isLoading}
                    id="email"
                    value={email}
                    onChange={handleChange}
                />
                <button
                    className="
                        border-b
                        font-medium
                        text-body
                        text-sm
                        disabled:pointer-events-none
                    "
                    disabled={isLoading || !isValid}
                >
                    Subscribe
                </button>
            </div>

            {message && (
                <div className="mt-1 text-muted text-sm">{message}</div>
            )}
        </form>
    )
}

export default Subscribe
