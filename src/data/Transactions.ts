import { Transaction } from './@types/Transaction'
import { Cards } from './Cards'

export const Transactions: Transaction[] = new Array(200).fill(0).map((_, i) => {
  const card = Cards[Math.round(Math.random() * (Cards.length - 1))]
  return {
    transactionID: Math.round(Math.random() * 100000),
    cardID: card.cardID,
    cardAccount: card.cardAccount,
    currency: card.currency,
    amount: 1000 + Math.round(Math.random() * 100000),
    merchantInfo: `Merchant ${i + 1}`,
    transactionDate: new Date(+new Date() - 1000 * 3600 * 24 * 30 * Math.round(Math.random() * 36)),
  }
})
