import React, { FC } from 'react'

import { Provider } from '@/store'

interface Props {
    element: any
}

const Wrapper: FC<Props> = ({ element }) => {
    return <Provider>{element}</Provider>
}

export default Wrapper
