import clsx from 'clsx'

import styles from './index.module.css'

export const TipButton: React.FC = () => {
    return (
        <button
            className={clsx([
                'relative',
                'overflow-hidden',
                'inline-flex',
                'items-center',
                'justify-center',
                'px-3',
                'py-3',
                'md:py-2',
                'shadow-sm',
                'text-sm',
                'md:text-base',
                'font-medium',
                'rounded-lg',
                'text-white',
                'transition-colors',
                'w-full',
                'bg-blue-600',
                'hover:bg-blue-700',
                'hover:border-blue-700',
                'focus:outline-none',
                'focus:ring',
                'focus:ring-offset-3',
                'focus:ring-offset-fill',
                'focus:ring-blue-400',
                styles.button,
            ])}
            onClick={() => alert('Nice Click!')}
        >
            <span className="z-10">Support Directly</span>
        </button>
    )
}
