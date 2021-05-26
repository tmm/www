import React, { useEffect, useRef } from 'react'

export const useInterval = (callback: React.EffectCallback, delay = 0) => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    const savedCallback = useRef<React.EffectCallback>(() => {})
    /* eslint-enable @typescript-eslint/no-empty-function */

    useEffect(() => {
        savedCallback.current = callback
    })

    useEffect(() => {
        const interval = setInterval(() => savedCallback.current(), delay)
        return () => clearInterval(interval)
    }, [delay])
}
