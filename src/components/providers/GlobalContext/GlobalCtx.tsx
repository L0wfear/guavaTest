import { FC, ReactNode, useState } from 'react'
import { GlobalContextProvider, GlobalCtx } from './GlobalContext'

export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<GlobalCtx['filters']>({})

  return (
    <GlobalContextProvider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </GlobalContextProvider>
  )
}
