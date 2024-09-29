import Tag from '../Tag'
// import sushi from '../../assets/images/sushi.png'
import { Titulo, Card, Descricao, Image, Button, Infos } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ description, image, infos, title }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button">Saiba Mais</Button>
  </Card>
)

export default Product
