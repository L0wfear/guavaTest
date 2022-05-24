import { createContext, Dispatch, SetStateAction } from 'react'

export type GlobalCtx = {
  filters: {
    [K: string]: any
  }
  setFilters?: Dispatch<SetStateAction<GlobalCtx['filters']>>
}

export const GlobalContext = createContext<GlobalCtx>({
  filters: {},
})

export const GlobalContextProvider = GlobalContext.Provider
