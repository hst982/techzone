export function formatCurrency(
  value: number,
  locale: string = 'vi-VN',
  currency: string = 'VND',
  style: 'currency' | 'decimal' = 'decimal',
) {
  return new Intl.NumberFormat(locale, {
    style: style,
    currency,
    minimumFractionDigits: 0,
  }).format(value)
}
