import sa from 'gatsby-plugin-simple-analytics'

import { useMount } from 'react-use'

import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'

import usePrefersDarkMode from '@/hooks/use-prefers-dark-mode'

type State = {
    appearance: string
    isLight: boolean
    setAppearance: Dispatch<SetStateAction<string>>
}
const Context = createContext<Partial<State>>({})

type Props = {
    children: ReactNode
}
const Provider = ({ children }: Props) => {
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

const useStore = () => useContext(Context) as State

export { Provider, Context, useStore }
