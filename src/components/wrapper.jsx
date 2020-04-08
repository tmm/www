import React from 'react'

import { Provider } from '@/store'

const Wrapper = ({ element }) => {
    return <Provider>{element}</Provider>
}

export default Wrapper
