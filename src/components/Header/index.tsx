import { Titulo, HeaderTop, ImgLogo } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <>
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
