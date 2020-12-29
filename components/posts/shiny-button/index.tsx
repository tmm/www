import clsx from 'clsx'

import styles from './index.module.css'

type Props = {
    variant: 'base' | 'shimmer' | 'shine'
}

export const ShinyButton: React.FC<Props> = ({ variant = 'base' }) => {
    return (
        <button
            className={clsx([
                'relative',
                'overflow-hidden',
                styles.button,
                variant === 'shimmer' && styles.shimmer,
                variant === 'shine' && styles.shine,
            ])}
            onClick={() => alert('Nice Click!')}
        >
            <span className="z-10">Add to Cart</span>
            <svg
                aria-hidden="true"
                className="ml-4 -mr-1 h-5 w-5 z-10"
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
            >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
        </button>
    )
}
