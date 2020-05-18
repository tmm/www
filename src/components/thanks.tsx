import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Thanks: FC<Props> = ({ children }) => {
    return <div className="mt-8 text-muted text-sm">{children}</div>
}

export default Thanks
