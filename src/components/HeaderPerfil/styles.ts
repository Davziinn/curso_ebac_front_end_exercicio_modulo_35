import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

interface ImagemProps {
  image: string
}

export const Header = styled.h2`
  color: #ccc;
  margin: 20px 0;
  padding-left: 20px;
`

export const Perfil = styled.div`
  width: 100%;
  height: 186px;
  top: -23px;
  background-color: ${cores.corFundo};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const Logo = styled(Link)`
  width: 120px;
  height: auto;
  display: block;

  img {
    width: 100%;
    height: auto;
  }
`

export const CarrinhoInfo = styled.p`
  font-size: 16px;
  color: ${cores.corTexto};
`

export const Imagem = styled.div<ImagemProps>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

export const NomeComida = styled.h4`
  width: 101px;
  height: 33.25px;
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  text-align: left;
  color: #fff;
  z-index: 2;
  padding-left: 170px;
`

export const NomeRestaurante = styled.p`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: left;
  color: #fff;
  z-index: 2;
  padding-left: 170px;
`
