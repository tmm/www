import { Stripe as StripeJS, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<StripeJS | null>
export function getStripe() {
    if (!stripePromise) {
        stripePromise = loadStripe(
            <string>process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        )
    }
    return stripePromise
}
