import { Elements as StripeElements } from '@stripe/react-stripe-js'

import { getStripe } from '@/lib/get-stripe-js'

type Props = {
    children?: React.ReactNode
}

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
    const stripe = getStripe()
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
