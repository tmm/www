import { IconProps as Props } from '../icon'

export const Music: React.FC<Props> = ({ size, ...restProps }) => {
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
                d="M1.5 9.5h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1zm0 0v-3a6 6 0 1112 0v3m0 0h-1a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1z"
                stroke="currentColor"
            />
        </svg>
    )
}
