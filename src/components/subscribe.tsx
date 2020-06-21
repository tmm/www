import React, { FC } from 'react'
import { useLocation } from '@reach/router'

import { useButtondown } from '@/hooks'

const Subscribe: FC = () => {
    const { pathname } = useLocation()
    const {
        email,
        isLoading,
        message,
        isValid,
        handleBlur,
        handleFocus,
        handleChange,
        handleSubmit,
    } = useButtondown(pathname)

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mb-1 text-muted">Email me about new posts</div>

            <div className="flex">
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
