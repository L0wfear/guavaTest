import { Transactions } from '../../../../data'
import { Transaction } from '../../../../data/@types/Transaction'
import { DataTableConfig } from '../../../DataTable/@types/config'

export const transActionsTableConfig: DataTableConfig<Transaction> = {
  rows: Transactions,
  columns: [
    {
      field: 'transactionID',
      headerName: 'Transaction ID',
      flex: 1,
      type: 'string',
    },
    {
      field: 'cardID',
      headerName: 'TransAction ID',
      flex: 1,
      type: 'number',
    },
    {
      field: 'amount',
      headerName: 'Amount',
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
      field: 'merchantInfo',
      headerName: 'Merchant Info',
      flex: 1,
      type: 'date',
    },
    {
      field: 'transactionDate',
      headerName: 'Transaction date',
      flex: 1,
      type: 'date',
    },
  ],
  getRowId: (row) => row.transactionID,
}
