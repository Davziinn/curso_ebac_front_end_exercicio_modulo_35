import Product from '../Produtc'
import { List, Container, ListProduct } from './styles'

import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((game) => (
        <ListProduct key={game.id}>
          <Product
            description={game.description}
            image={game.image}
            title={game.title}
            infos={game.infos}
          />
        </ListProduct>
      ))}
    </List>
  </Container>
)

export default ProductList
