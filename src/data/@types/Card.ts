import { CURRENCY } from './Curencys'

export enum STATUS {
  active = 'active',
  blocked = 'blocked',
}

export type Card = {
  cardID: number
  cardAccount: string
  maskedCardNumber: string
  expireDate: Date
  currency: CURRENCY
  status: STATUS
  balance: number
}
