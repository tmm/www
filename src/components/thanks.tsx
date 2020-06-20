import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Thanks: FC<Props> = (props) => {
    return <div className="mt-8 text-muted text-sm">{props.children}</div>
}

export default Thanks
