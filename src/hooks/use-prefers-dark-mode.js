import useMedia from './use-media'

// from https://usehooks.com/useDarkMode/
function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

export default usePrefersDarkMode
