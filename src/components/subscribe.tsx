import React, { FC } from 'react'
import { useLocation } from '@reach/router'

import useButtondown from '@/hooks/use-buttondown'

interface Props {}

const Subscribe: FC<Props> = () => {
    const { pathname } = useLocation()
    const {
        email,
        isFocused,
        isLoading,
        message,
        isValid,
        handleBlur,
        handleFocus,
        handleChange,
        handleSubmit,
    } = useButtondown(pathname)

    return (
        <form className="mb-30 mt-24 m-auto max-w-sm" onSubmit={handleSubmit}>
            <div className="font-medium mb-1 text-muted text-sm">
                Get an email when I publish a new post
            </div>
            <div
                className={`border-b flex py-2 w-full ${
                    isFocused ? 'border-accent' : ''
                }`}
            >
                <input
                    className="bg-transparent outline-none placeholder-muted pr-2 flex-1"
                    disabled={isLoading}
                    placeholder="email@address.com"
                    value={email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                <button
                    className="text-body text-sm font-semibold hover:text-heading disabled:pointer-events-none"
                    disabled={isLoading || !isValid}
                >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
            {message && (
                <div className="mt-2 text-muted text-xs">{message}</div>
            )}
        </form>
    )
}

export default Subscribe
