import { loadStripe } from '@stripe/stripe-js'
import { Elements as StripeElements } from '@stripe/react-stripe-js'

type Props = {
    children?: React.ReactNode
}

const stripe = loadStripe(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)

const fonts = [
    {
        family: 'source-sans',
        src:
            'url(https://meagher.co/fonts/source-sans/SourceSans3VF-Roman.ttf.woff)',
        weight: '400',
    },
    {
        family: 'source-sans',
        src:
            'url(https://meagher.co/fonts/source-sans/SourceSans3VF-Roman.ttf.woff2)',
        weight: '400',
    },
]

export const Elements: React.FC<Props> = ({ children }) => {
    return (
        <StripeElements
            options={{
                fonts,
            }}
            stripe={stripe}
        >
            {children}
        </StripeElements>
    )
}
