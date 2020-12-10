import { IconProps as Props } from '../icon'

export const Important: React.FC<Props> = ({ size, ...restProps }) => {
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
                d="M14.5.5l.457.203A.5.5 0 0014.5 0v.5zM.5.5V0a.5.5 0 00-.5.5h.5zm14 9v.5a.5.5 0 00.457-.703L14.5 9.5zm-2-4.5l-.457-.203a.5.5 0 000 .406L12.5 5zm2-5H.5v1h14V0zM0 .5v9h1v-9H0zM.5 10h14V9H.5v1zm14.457-.703l-2-4.5-.914.406 2 4.5.914-.406zm-2-4.094l2-4.5-.914-.406-2 4.5.914.406zM1 15V9.5H0V15h1z"
                fill="currentColor"
            />
        </svg>
    )
}
