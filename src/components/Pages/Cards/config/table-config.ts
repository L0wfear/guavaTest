import { Cards } from '../../../../data'
import { Card } from '../../../../data/@types/Card'
import { DataTableConfig } from '../../../DataTable/@types/config'

export const cardsTableConfig: DataTableConfig<Card> = {
  rows: Cards,
  columns: [
    {
      field: 'cardID',
      headerName: 'Card ID',
      flex: 1,
      type: 'number',
    },
    {
      field: 'balance',
      headerName: 'Balance',
      flex: 1,
      type: 'number',
    },
    {
      field: 'cardAccount',
      headerName: 'Card Account',
      flex: 2,
      type: 'string',
    },
    {
      field: 'currency',
      headerName: 'Currency',
      flex: 1,
      type: 'string',
    },
    {
      field: 'expireDate',
      headerName: 'Expire Date',
      flex: 1,
      type: 'date',
    },
    {
      field: 'maskedCardNumber',
      headerName: 'Card Number',
      flex: 1,
      type: 'string',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      type: 'string',
    },
  ],
  getRowId: (row) => row.cardID
}
