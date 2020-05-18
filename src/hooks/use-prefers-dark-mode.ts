import { useMedia } from 'react-use'

function usePrefersDarkMode() {
    return useMedia('(prefers-color-scheme: dark)', true)
}

export default usePrefersDarkMode
