import React, { FC, ReactNode } from 'react'

interface Props {
    caption: string | ReactNode
    children: ReactNode
}

const Figure: FC<Props> = (props) => {
    return (
        <figure className="mb-5 mt-6">
            <div className="border overflow-hidden rounded">
                {props.children}
            </div>
            <figcaption>{props.caption}</figcaption>
        </figure>
    )
}

export default Figure
