import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

interface ImagemProps {
  image: string
}

export const Header = styled.h2`
  color: #ccc;
  padding-left: 20px;
  text-align: left; /* Alinhado à esquerda */
`

export const Perfil = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.corFundo};
  display: flex;
  justify-content: space-between; /* Distribuição do espaço */
  align-items: center;
  padding: 0 20px;
`

export const Logo = styled(Link)`
  display: block;
  margin: 0 auto; /* Centraliza o logo */
  img {
    width: 120px;
    height: auto;
  }
`

export const CarrinhoInfo = styled.p`
  font-size: 16px;
  color: ${cores.corTexto};
`

export const Imagem = styled.div<ImagemProps>`
  width: 100%;
  height: 400px; /* Aumenta a altura da imagem */
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
  position: absolute;
  top: 20px;
  left: 40px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  color: #fff;
  z-index: 2;
`

export const NomeRestaurante = styled.p`
  position: absolute;
  bottom: 20px;
  left: 40px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  z-index: 2;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around; /* Alinha os cards com espaçamento */
  padding: 20px 0;
`

export const Card = styled.div`
  width: 250px;
  border: 1px solid ${cores.corFundo};
  background-color: ${cores.corCard};
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
  }
  h4 {
    font-size: 20px;
    margin: 10px 0;
  }
  p {
    font-size: 16px;
    margin: 10px;
  }
  button {
    background-color: rgba(255, 235, 217, 1);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
  }
`
