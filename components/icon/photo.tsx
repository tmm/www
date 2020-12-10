import { IconProps as Props } from '../icon'

export const Photo: React.FC<Props> = ({ size, ...restProps }) => {
    return (
        <svg
            fill="none"
            height={size}
            viewBox="0 0 15 15"
            width={size}
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <path
                d="M7 1.5H2m12.5 11v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1zm-5-2a2 2 0 110-4 2 2 0 010 4z"
                stroke="currentColor"
            />
        </svg>
    )
}
