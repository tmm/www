import { NextApiRequest, NextApiResponse } from 'next'

import { getStripe } from '@/lib/get-stripe'
import { formatAmountForStripe } from '@/lib/format-amount'

const stripe = getStripe()

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { amount, email, referrer_url } = req.body

        if (!amount) {
            return res.status(400).json({ error: 'Amount is required' })
        }

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: formatAmountForStripe(amount),
                currency: 'usd',
                metadata: {
                    email,
                    referrer_url,
                },
            })
            res.status(200).json({ clientSecret: paymentIntent.client_secret })
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message })
        } finally {
            res.end()
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}

export default handler
