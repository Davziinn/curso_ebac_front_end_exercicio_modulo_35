import { Titulo, HeaderTop, ImgLogo, Home } from './styles'
import logo from '../../assets/images/logo.svg'

type Props = {
  titulo: string
}

const Header = ({ titulo }: Props) => (
  <>
    <Home>{titulo}</Home>
    <HeaderTop>
      <ImgLogo src={logo} alt="Logo" />
      <Titulo>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Titulo>
    </HeaderTop>
  </>
)

export default Header
