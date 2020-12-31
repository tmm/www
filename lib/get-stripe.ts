import Stripe from 'stripe'

export function getStripe() {
    return new Stripe(<string>process.env.STRIPE_SECRET_KEY, {
        // https://github.com/stripe/stripe-node#configuration
        apiVersion: '2020-08-27',
    })
}
