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
