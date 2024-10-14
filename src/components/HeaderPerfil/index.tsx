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

type HeaderPerfilProps = {
  nomeRestaurante: string
  tipoComida: string
  imagemRestaurante: string
}

const HeaderPerfil = ({
  nomeRestaurante,
  tipoComida,
  imagemRestaurante
}: HeaderPerfilProps) => (
  <>
    <Header />
    <Perfil>
      <h3 style={{ marginLeft: '20px' }}>Restaurantes</h3>
      <Logo to="/">
        <img src={logo} alt="logo" />
      </Logo>
      <CarrinhoInfo>0 produto(s) no carrinho</CarrinhoInfo>
    </Perfil>
    <Imagem image={imagemRestaurante}>
      <NomeComida>{tipoComida}</NomeComida>
      <NomeRestaurante>{nomeRestaurante}</NomeRestaurante>
    </Imagem>
  </>
)

export default HeaderPerfil
