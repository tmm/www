import merge from 'lodash.merge'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { CardElement, useElements } from '@stripe/react-stripe-js'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

import styles from './card-input.module.css'

type Props = {
    setDisabled: (disabled: boolean) => void
}

const getCardStyle = (theme: Theme, width: number) => {
    const commonStyles = {
        base: {
            fontSmoothing: 'antialiased',
            fontFamily:
                'source-sans, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '400',
            fontSize: width <= 768 ? '15.75px' : '18px',
        },
        invalid: {
            color: '#ef4444',
        },
    }

    let themeStyles = {}
    if (theme === 'light') {
        themeStyles = {
            base: {
                color: '#191919',
                '::placeholder': {
                    color: '#595959',
                },
            },
        }
    } else {
        themeStyles = {
            base: {
                color: '#e5e5e5',
                '::placeholder': {
                    color: '#9fa6ac',
                },
            },
        }
    }

    return merge(commonStyles, themeStyles)
}

export const CardInput: React.FC<Props> = ({ setDisabled }) => {
    const { systemTheme } = useTheme()
    const { width } = useWindowSize()
    const elements = useElements()
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Update font size or theme
        const cardElement = elements?.getElement(CardElement)
        const style = getCardStyle(systemTheme as Theme, width)
        cardElement?.update({ style })
    }, [elements, width, systemTheme])

    async function handleChange(event: StripeCardElementChangeEvent) {
        const disabled =
            event.empty || event.error !== undefined || !event.complete
        setDisabled(disabled)
        setError(event.error ? event.error.message : null)
    }

    return (
        <>
            <CardElement
                className="h-10 pl-3 md:pl-4 rounded-lg w-full"
                id="card-element"
                options={{
                    classes: {
                        base: styles.input,
                        focus: styles.inputFocus,
                    },
                    hideIcon: true,
                    style: getCardStyle(systemTheme as Theme, width),
                }}
                onChange={handleChange}
            />
            {error && (
                <div className="mt-2 pl-2 text-xs md:text-sm text-red-500">
                    {error}
                </div>
            )}
        </>
    )
}
