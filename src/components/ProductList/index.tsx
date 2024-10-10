import { List, Container, ListProduct } from './styles'
import Food from '../../models/Food'
import Product from '../Produtc'

export type Props = {
  foods: Food[]
  onClickRestaurante: (id: number) => void
}

const ProductList = ({ foods, onClickRestaurante }: Props) => (
  <Container>
    <List>
      {foods.map((food) => (
        <ListProduct key={food.id}>
          <div onClick={() => onClickRestaurante(food.id)}>
            <Product
              description={food.description}
              image={food.image}
              title={food.title}
              infos={food.infos}
              rating={food.rating}
            />
          </div>
        </ListProduct>
      ))}
    </List>
  </Container>
)

export default ProductList
