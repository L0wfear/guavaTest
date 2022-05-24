import { FC } from 'react'
import { DataTableContainer } from '../../DataTable/DataTableContainer'
import { transActionsTableConfig } from './config'

export const TransActions: FC = () => {
  return <DataTableContainer config={transActionsTableConfig} />
}
