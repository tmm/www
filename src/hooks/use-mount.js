import { useEffect } from 'react'

// eslint-disable react-hooks/exhaustive-deps
function useMount(callback) {
    useEffect(callback, [])
}

export default useMount
