import { PageRoute } from '../../../routes/@types/config'

const Card = () => (
  <div style={{ width: '100%', height: '200px', backgroundColor: 'green' }}>
    Card
  </div>
)

export const CardPage: PageRoute = {
  component: Card,
  path: 'cards/:id',
  title: 'Card',
}
