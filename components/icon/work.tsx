import { IconProps as Props } from '../icon'

export const Work: React.FC<Props> = ({ size, ...restProps }) => {
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
                d="M5.5 3v-.5a2 2 0 114 0V3m-9 3.5c3.706 4.235 10.294 4.235 14 0m-13-3h12a1 1 0 011 1v9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-9a1 1 0 011-1z"
                stroke="currentColor"
            />
        </svg>
    )
}
