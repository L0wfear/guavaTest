import { PageRoute } from '../../routes/@types/config'
import { TransActionPage } from './TransAction'
import { TransActions } from './TransActions'

export const TransActionsPage: PageRoute = {
  component: TransActions,
  path: 'transactions',
  title: 'TransActions',
  children: [TransActionPage]
}
