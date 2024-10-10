import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Food from '../../models/Food'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  description: string
  porcao: string
}

type Restaurante = {
  id: number
  titulo: string
  destaque?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  description: string
  image: string
  title: string
  infos: string[]
  rating: string
  foods: Cardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [foods, setFoods] = useState<Food[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res)

        const mappedFoods: Food[] = res.map((restaurante: Restaurante) => ({
          id: restaurante.id,
          description: restaurante.descricao,
          image: restaurante.capa,
          title: restaurante.titulo,
          infos: restaurante.tipo.split(','),
          rating: parseFloat(restaurante.avaliacao)
        }))

        setFoods(mappedFoods)
      })
  }, [])

  const handleRestauranteClick = (id: number) => {
    navigate(`/restaurante/${id}`)
  }

  return (
    <>
      <Header />
      <ProductList foods={foods} onClickRestaurante={handleRestauranteClick} />
    </>
  )
}

export default Home
