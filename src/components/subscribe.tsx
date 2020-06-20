import React, { FC } from 'react'
import { useLocation } from '@reach/router'

import useButtondown from '@/hooks/use-buttondown'

const Subscribe: FC = () => {
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
                Email me about new posts
            </div>
            <div
                className={`border-b flex pb-1 pt-0 w-full ${
                    isFocused ? 'border-accent' : ''
                }`}
            >
                <input
                    className="bg-transparent outline-none placeholder-muted pr-2 flex-1"
                    disabled={isLoading}
                    placeholder="name@example.com"
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
