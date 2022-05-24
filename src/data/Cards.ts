import { Card, STATUS } from './@types/Card'
import { CURRENCY } from './@types/Curencys'

export const Cards: Card[] = new Array(20).fill(0).map((_, i) => ({
  cardID: Math.round(Math.random() * 100000),
  cardAccount: `4080281074020010${1000 + i}`,
  balance: 1000000,
  currency: i < 7 ? CURRENCY.AZN : i < 13 ? CURRENCY.EUR : CURRENCY.USD,
  expireDate: new Date(+new Date() + 1000 * 3600 * 24 * 30 * (Math.round(Math.random() * 60) + 36)),
  maskedCardNumber: `**** ${Math.round(1000 + Math.random() * 8999)}`,
  status: Math.round(Math.random() * 100) < 12 ? STATUS.blocked : STATUS.active,
}))
