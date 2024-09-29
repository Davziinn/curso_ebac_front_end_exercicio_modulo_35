import React from 'react'
import {
  Header,
  Perfil,
  CarrinhoInfo,
  Logo,
  Imagem,
  NomeComida,
  NomeRestaurante
} from './styles'
import logo from '../../assets/images/logo.svg'
import macarrao from '../../assets/images/comidaItaliana.png'

type Props = {
  titulo: string
}

const HeaderPerfil = ({ titulo }: Props) => (
  <>
    <Header>{titulo}</Header>
    <Perfil>
      <h3>Restaurantes</h3>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <CarrinhoInfo>0 produto(s) no carrinho</CarrinhoInfo>
    </Perfil>
    <Imagem image={macarrao}>
      <NomeComida>Italiana</NomeComida>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </Imagem>
  </>
)

export default HeaderPerfil
