import Tag from '../Tag'
import { Titulo, Card, Descricao, Image, Infos, StyledLink } from './styles'

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
    <StyledLink to="/perfil">Saiba Mais</StyledLink>
  </Card>
)

export default Product
