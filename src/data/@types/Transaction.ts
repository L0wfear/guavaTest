import { Card } from './Card'

export type Transaction = {
  transactionID: number
  cardAccount: Card['cardAccount']
  cardID: Card['cardID']
  amount: number
  currency: Card['currency']
  transactionDate: Date
  merchantInfo: string
}
