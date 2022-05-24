import { FC } from 'react'
import { DataTableContainer } from '../../DataTable/DataTableContainer'
import { cardsTableConfig } from './config'

export const Cards: FC = () => {
  return <DataTableContainer config={cardsTableConfig} />
}
