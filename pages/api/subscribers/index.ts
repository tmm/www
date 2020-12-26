import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, referrer_url } = req.body

        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }

        try {
            const response = await fetch(
                `https://api.buttondown.email/v1/subscribers`,
                {
                    body: JSON.stringify({
                        email,
                        referrer_url,
                    }),
                    headers: {
                        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                },
            )

            if (response.status >= 400) {
                const data = await response.json()
                let error = 'Something went wrong'
                if (Array.isArray(data)) {
                    const text = data[0]
                    error = text.includes('already subscribed')
                        ? 'Email already subscribed'
                        : text
                } else if (typeof data === 'object') {
                    const text = data?.email?.[0]
                    error = text ?? error
                }
                res.status(400).json({ error })
            } else {
                res.status(201)
            }
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
