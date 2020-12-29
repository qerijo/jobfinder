export const options = ['USD', 'RUR', 'EUR']

export const currencySelectOptions = options.map((el) => ({
  label: el,
  value: el,
}))

export const defaultCurrency = { label: 'RUR', value: 'RUR' }

export const currencyValues = {
  RUR: 'RUR',
  USD: 'USD',
  EUR: 'EUR',
}
