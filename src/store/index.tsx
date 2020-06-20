import React, { ReactNode, createContext, useContext } from 'react'

type State = {}
const Context = createContext<Partial<State>>({})

type Props = {
    children: ReactNode
}
const Provider = (props: Props) => {
    return <Context.Provider value={{}}>{props.children}</Context.Provider>
}

const useStore = () => useContext(Context) as State

export { Provider, Context, useStore }
