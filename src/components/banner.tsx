import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Banner: FC<Props> = (props) => {
    return (
        <div
            className="border bg-fill mb-10 p-3 rounded text-heading text-sm"
            role="banner"
        >
            {props.children}
        </div>
    )
}

export default Banner
