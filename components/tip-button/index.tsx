import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { formatAmountForDisplay } from '@/lib/format-amount'
import { getStripe } from '@/lib/get-stripe-js'

import styles from './index.module.css'

type FormData = {
    email: string
    amount: number
}

export const TipButton: React.FC = () => {
    const [showForm, setShowForm] = useState<boolean>(false)
    const { register, handleSubmit, watch, errors } = useForm<FormData>()

    async function onSubmit(formData: FormData) {
        console.log(formData)
        const stripe = await getStripe()
        if (!stripe) return
        console.log(stripe)
    }

    if (showForm) {
        const amount = watch('amount')
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
                        className={clsx([styles.field])}
                        id="email"
                        name="email"
                        placeholder="Email"
                        ref={register({ required: true })}
                        type="email"
                    />
                </div>
                <div className="mb-4">
                    <label className="sr-only" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        aria-describedby="amount"
                        aria-invalid={errors.amount ? 'true' : 'false'}
                        className={clsx([styles.field])}
                        id="amount"
                        name="amount"
                        placeholder="Amount"
                        ref={register({
                            required: true,
                            min: {
                                value: 4,
                                message: `Minimum amount is
                                ${formatAmountForDisplay(4, 'usd', {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}`,
                            },
                        })}
                        type="number"
                    />

                    {errors.amount?.message && (
                        <p
                            className="mt-2 pl-2 text-sm text-red-500"
                            id="amount-error"
                        >
                            {errors.amount.message}
                        </p>
                    )}
                </div>

                <button className={styles.button} type="submit">
                    <span className="z-10">
                        {amount && amount >= 4 ? (
                            <>Pay {formatAmountForDisplay(amount)}</>
                        ) : (
                            'Pay'
                        )}
                    </span>
                </button>
            </form>
        )
    }

    return (
        <button className={styles.button} onClick={() => setShowForm(true)}>
            <span className="z-10">Support Directly</span>
        </button>
    )
}
