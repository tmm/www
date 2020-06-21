import React, { FC } from 'react'
import { useLocation } from '@reach/router'

import { useButtondown } from '@/hooks'

const Subscribe: FC = () => {
    const { pathname } = useLocation()
    const {
        email,
        isLoading,
        message,
        isFocused,
        isValid,
        handleBlur,
        handleFocus,
        handleChange,
        handleSubmit,
    } = useButtondown(pathname)

    return (
        <form
            className={`
                duration-200
                mt-20
                opacity-50
                transition-opacity
                hover:opacity-100
                ${isFocused ? 'opacity-100' : ''}
            `}
            onSubmit={handleSubmit}
        >
            <div className="mb-1 text-muted">Email me about new posts</div>

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
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
                <button
                    className="
                        border-b
                        font-medium
                        text-body
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
