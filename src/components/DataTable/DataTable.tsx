import { DataGrid } from '@mui/x-data-grid'
import { FC } from 'react'
import { DataTableProps } from './@types/DataTableProps'

export const DataTable: FC<DataTableProps> = ({ columns, rows, getRowId }) => {
  return (
    <div style={{ height: '80vh', margin: 'auto', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} getRowId={getRowId} pageSize={20} disableSelectionOnClick />
    </div>
  )
}
