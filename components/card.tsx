import { format } from 'date-fns'

import { Icon } from './icon'
import { Link } from './link'

type Props = {
    body: string
    date: string | Date
    description: string
    excerpt?: string
    slug: string
    title: string
    type: PostType
}

export const Card: React.FC<Props> = ({
    body,
    date,
    description,
    excerpt,
    slug,
    title,
    type,
}) => {
    const isPost = type === 'post'
    return (
        <div className="card flex mb-10">
            <div className="flex flex-col items-center justify-center">
                <div
                    className="
                        bg-fill
                        border-background
                        border-4
                        flex
                        justify-center
                        items-center
                        p-2.5
                        rounded-full
                    "
                >
                    <Icon type={type} />
                </div>
                <div className="-mb-10 card-divider bg-fill flex-1 w-px" />
            </div>
            <div className="ml-4 space-y-3 w-full">
                <div className="pt-0.5">
                    <div className="font-medium leading-snug">
                        <Link as={slug} className="no-link" href="[slug]">
                            {isPost ? 'Published new post' : title}
                        </Link>
                    </div>
                    <div className="leading-tight text-muted text-sm">
                        {format(new Date(date), 'MMMM dd yyyy')}
                    </div>
                </div>
                {isPost ? (
                    <div className="bg-fill px-4 py-3 rounded-md w-full">
                        <Link as={slug} className="block no-link" href="[slug]">
                            <div className="text-body font-semibold">
                                {title}
                            </div>
                            <div className="text-muted">{description}</div>
                        </Link>
                    </div>
                ) : (
                    <div
                        className="card-content"
                        dangerouslySetInnerHTML={{
                            __html: excerpt || body,
                        }}
                    />
                )}
            </div>
        </div>
    )
}
