import { GridRowsProp, GridColDef, GridNativeColTypes } from '@mui/x-data-grid'

type Column<T extends Record<string, any>> = GridColDef<T> & {
  field: keyof T
  type: GridNativeColTypes
}

export type DataTableConfig<T extends Record<string, any>> = {
  rows: GridRowsProp<T>
  columns:Column<T>[]
  getRowId: (row: T) => T[keyof T]
}
