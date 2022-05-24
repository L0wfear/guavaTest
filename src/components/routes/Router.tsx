import { Route, Routes, Navigate } from 'react-router-dom'
import { ReactElement } from 'react'
import { AppRoutes } from './@types/config'
import { appRoutes } from './appRoutes'

const renderRoutes = (availableRoutes: AppRoutes) => {
  return availableRoutes.reduce((routesAcc: Array<ReactElement>, curRoute) => {
    if (curRoute.children) {
      routesAcc.push(...renderRoutes(curRoute.children))
    }
    routesAcc.push(
      <Route
        key={curRoute.routePath || curRoute.path}
        path={curRoute.routePath || curRoute.path}
        element={<curRoute.component />}
      />
    )
    return routesAcc
  }, [])
}

export const Router = () => {
  return (
    <Routes>
      {renderRoutes(appRoutes)}
      <Route path='*' element={<Navigate to='/cards' />} />
    </Routes>
  )
}
