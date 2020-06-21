import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Notes: FC<Props> = (props) => {
    return (
        <p className="leading-normal mb-4 text-muted text-sm">
            {props.children}
        </p>
    )
}

export default Notes
