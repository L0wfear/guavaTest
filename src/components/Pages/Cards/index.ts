import { PageRoute } from '../../routes/@types/config'
import { CardPage } from './Card'
import { Cards } from './Cards'

export const CardsPage: PageRoute = {
  component: Cards,
  path: 'cards',
  title: 'Cards',
  children: [CardPage]
}
