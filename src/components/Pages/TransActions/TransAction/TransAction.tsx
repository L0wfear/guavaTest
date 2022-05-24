import { PageRoute } from '../../../routes/@types/config'

const TransAction = () => (
  <div style={{ width: '100%', height: '200px', backgroundColor: 'green' }}>
    TransAction
  </div>
)

export const TransActionPage: PageRoute = {
  component: TransAction,
  path: 'transactions/:id',
  title: 'TransAction',
}
