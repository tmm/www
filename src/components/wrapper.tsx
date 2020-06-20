import React, { FC, ReactNode } from 'react'

import { Provider } from '@/store'

interface Props {
    element: ReactNode
}

const Wrapper: FC<Props> = (props) => {
    return <Provider>{props.element}</Provider>
}

export default Wrapper
