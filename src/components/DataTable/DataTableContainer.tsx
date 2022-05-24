import { FC, useMemo } from 'react'
import { DataTableConfig } from './@types/config'
import { DataTable } from './DataTable'

const makeColumns = (cols: DataTableConfig<any>['columns']) => cols.map(el => ({
  ...el,
  disableColumnMenu: true,
  sortable: false,
}))

export const DataTableContainer: FC<{ config: DataTableConfig<any> }> = ({
  config: {columns, ...rest},
}) => {
  const cols = useMemo(() => makeColumns(columns), [columns])
  return <DataTable columns={cols} {...rest} />
}
