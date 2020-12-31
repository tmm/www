export function formatAmountForDisplay(
    amount: number,
    currency = 'usd',
    options: Intl.NumberFormatOptions = {},
): string {
    const numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
        ...options,
    })
    return numberFormat.format(amount)
}

export function formatAmountForStripe(
    amount: number,
    currency = 'usd',
): number {
    const numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    })
    const parts = numberFormat.formatToParts(amount)
    let zeroDecimalCurrency = true
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}
