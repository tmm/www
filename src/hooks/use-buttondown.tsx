import React, { FormEvent, useEffect, useState } from 'react'

const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/

function useButtondown(pathname: string) {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [message, setMessage] = useState<string | any>('')
    const [isValid, setIsValid] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        setIsValid(!!email && emailRegex.test(email))
    }, [email])

    const handleBlur = () => {
        setIsFocused(false)
    }

    const handleFocus = () => {
        setIsFocused(true)
    }

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
            setIsSubscribed(false)
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
                setIsSubscribed(true)
                setMessage(
                    <div>
                        Subscribed{' '}
                        <span className="border-b border-dotted border-accent text-accent ">
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

    return {
        email,
        isError,
        isFocused,
        isLoading,
        isSubscribed,
        isValid,
        message,
        handleBlur,
        handleFocus,
        handleChange,
        handleSubmit,
    }
}

export default useButtondown
