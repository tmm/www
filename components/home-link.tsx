import { memo } from 'react'

import Link from './link'

type Props = {
    name: string
    href?: string
    value?: string
    as?: string
    children?: React.ReactNode
    external?: boolean
    truncate?: boolean
}

const HomeLink: React.FC<Props> = (props) => {
    return (
        <div
            className={
                props.truncate ? 'truncate whitespace-no-wrap' : undefined
            }
        >
            <div
                className="
                    font-medium
                    inline-block
                    text-muted
                    text-sm
                    w-full
                    max-w-item
                    mr-3
                    md:mr-6
                "
            >
                {props.name}
            </div>

            {props.children ?? (
                <Link
                    as={props.as}
                    external={props.external ?? false}
                    href={props.href ?? ''}
                >
                    {props.value}
                </Link>
            )}
        </div>
    )
}

export default memo(HomeLink)
