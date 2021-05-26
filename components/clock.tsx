import React, { useState } from 'react'

import { useInterval } from '~/lib/use-interval'

type State = {
    hours: number
    minutes: number
}

export const Clock: React.FC = () => {
    const now = new Date()
    const [state, setState] = useState<State>({
        hours: now.getHours(),
        minutes: now.getMinutes(),
    })

    useInterval(() => {
        const now = new Date()
        setState({
            hours: now.getHours(),
            minutes: now.getMinutes(),
        })
    }, 1000)

    return (
        <div>
            {state.hours < 10 ? `0${state.hours}` : state.hours}:
            {state.minutes < 10 ? `0${state.minutes}` : state.minutes}
        </div>
    )
}
