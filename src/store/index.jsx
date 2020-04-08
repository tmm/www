import React, { createContext, useContext, useEffect, useState } from 'react'
import sa from 'gatsby-plugin-simple-analytics'

import useMount from '@/hooks/use-mount'
import usePrefersDarkMode from '@/hooks/use-prefers-dark-mode'

const Context = createContext()

const Provider = ({ children }) => {
    const prefersDarkMode = usePrefersDarkMode()
    const initialAppearance = prefersDarkMode ? 'dark' : 'light'
    const [appearance, setAppearance] = useState(initialAppearance)

    useMount(() => sa(`has_appearance_${initialAppearance}`))
    useEffect(() => {
        if (appearance) {
            setAppearance(prefersDarkMode ? 'dark' : 'light')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefersDarkMode])
    return (
        <Context.Provider
            value={{
                appearance,
                isLight: appearance === 'light',
                setAppearance,
            }}
        >
            {children}
        </Context.Provider>
    )
}

const useStore = () => useContext(Context)

export { Provider, Context, useStore }
