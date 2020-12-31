import { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import { formatAmountForDisplay } from '@/lib/format-amount'

import { CardInput } from './card-input'
import styles from './tip-button.module.css'

type FormData = {
    email: string
    amount: number
}

export const TipButton: React.FC = () => {
    const { asPath } = useRouter()
    const [showForm, setShowForm] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [succeeded, setSucceeded] = useState<boolean>(false)
    const [processing, setProcessing] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const { register, handleSubmit, watch, errors } = useForm<FormData>()
    const stripe = useStripe()
    const elements = useElements()
    const amount = watch('amount')

    async function onSubmit(formData: FormData) {
        if (disabled) return

        try {
            setProcessing(true)
            const response = await fetch('/api/payment-intents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, referrer_url: asPath }),
            })

            if (!response.ok) throw new Error('Error creating payment')
            const { clientSecret } = await response.json()

            if (!stripe || !elements) throw new Error('Error creating Stripe')
            const card = elements.getElement(CardElement)
            if (!card) throw new Error('Error getting card')

            const payload = await stripe.confirmCardPayment(clientSecret, {
                receipt_email: formData.email,
                payment_method: {
                    card,
                },
            })
            if (payload.error)
                throw new Error(`Payment failed: ${payload.error.message}`)

            setSucceeded(true)
        } catch (err) {
            console.log(err)
            setError(err?.message ?? 'Something went wrong')
        } finally {
            setProcessing(false)
        }
    }

    if (succeeded) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="font-medium mb-1 text-sm md:text-base">
                    Payment Successful
                </div>
                <div className="text-muted text-xs md:text-sm">
                    Thanks for supporting my work. It means a lot.
                </div>
            </div>
        )
    }

    if (showForm) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="sr-only" htmlFor="email">
                        Email
                    </label>
                    <input
                        aria-describedby="email"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        autoComplete="email"
                        className={clsx([
                            styles.field,
                            errors.email?.message && 'text-red-500',
                        ])}
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={register({ required: true })}
                        type="email"
                    />

                    {errors.email?.message && (
                        <div
                            className="mt-2 pl-2 text-xs md:text-sm text-red-500"
                            id="email-error"
                        >
                            {errors.email.message}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <label className="sr-only" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        aria-describedby="amount"
                        aria-invalid={errors.amount ? 'true' : 'false'}
                        className={clsx([
                            styles.field,
                            errors.amount?.message && 'text-red-500',
                        ])}
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        ref={register({
                            required: true,
                            min: {
                                value: 2,
                                message: `Minimum amount is
                                ${formatAmountForDisplay(2, 'usd', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}`,
                            },
                        })}
                        type="number"
                    />

                    {errors.amount?.message && (
                        <div
                            className="mt-2 pl-2 text-xs md:text-sm text-red-500"
                            id="amount-error"
                        >
                            {errors.amount.message}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <CardInput setDisabled={setDisabled} />
                </div>

                <button
                    className={styles.button}
                    disabled={disabled}
                    type="submit"
                >
                    {processing ? (
                        <span className="z-10">Paying</span>
                    ) : (
                        <span className="z-10">
                            {amount && amount >= 4 ? (
                                <>Pay {formatAmountForDisplay(amount)}</>
                            ) : (
                                'Pay'
                            )}
                        </span>
                    )}
                </button>

                {error && (
                    <div className="mt-2 pl-2 text-sm text-red-500">
                        {error}
                    </div>
                )}
            </form>
        )
    }

    return (
        <button className={styles.button} onClick={() => setShowForm(true)}>
            <span className="z-10">Support Directly</span>
        </button>
    )
}
