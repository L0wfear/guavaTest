import { FC } from 'react'

export type PageRoute = {
  title: string
  path: string
  routePath?: string
  component: FC<any>
  children?: Array<PageRoute>
}

export type AppRoutes = Array<PageRoute>
