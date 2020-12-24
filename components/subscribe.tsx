import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/

export const Subscribe: React.FC = () => {
    const { asPath } = useRouter()
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState<string | any>('')

    useEffect(() => {
        setIsValid(email !== '' && emailRegex.test(email))
    }, [email])

    const handleChange = (event: React.FormEvent) => {
        setEmail((event.target as HTMLInputElement).value)
        if (isError) {
            setIsError(false)
            setMessage('')
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            setIsError(false)
            setIsLoading(true)

            const endpoint = '/api/subscribers'
            const headers = {
                'Content-Type': 'application/json',
            }
            console.log(asPath)
            const body = { email, referrer_url: asPath }
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
                const message = data?.error ?? 'Something went wrong'
                setIsError(true)
                setMessage(message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div
                className="
                    bg-fill
                    flex
                    focus-within:outline-none
                    focus-within:ring
                    focus-within:border-blue-300
                    h-9
                    justify-between
                    sm:max-w-subscribe
                    mx-auto
                    px-3 
                    rounded-lg
                    w-full
                "
            >
                <label className="sr-only" htmlFor="email">
                    Email
                </label>
                <input
                    className="
                        bg-transparent
                        flex-1
                        outline-none
                        pr-2
                        placeholder-italic
                        placeholder-muted
                        placeholder-opacity-100
                        text-sm
                    "
                    disabled={isLoading}
                    id="email"
                    placeholder="Occassional emails from Tom"
                    value={email}
                    onChange={handleChange}
                />
                <button
                    className="
                        font-medium
                        text-body
                        text-sm
                        disabled:pointer-events-none
                    "
                    disabled={isLoading || !isValid}
                >
                    <span>{isLoading ? 'Subscribing' : 'Subscribe'}</span>
                </button>
            </div>

            {message && (
                <div className="font-serif mt-1 text-sm">{message}</div>
            )}
        </form>
    )
}
