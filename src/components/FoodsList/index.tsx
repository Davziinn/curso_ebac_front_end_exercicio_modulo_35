import React from 'react'
import { Container, Card, Img, Title, Descricao, Button } from './styles'
import { foods } from './data'

const FoodsList = () => (
  <Container>
    {foods.map((food) => (
      <Card key={food.id}>
        <Img src={food.image} alt={food.title} />
        <Title>{food.title}</Title>
        <Descricao>{food.description}</Descricao>
        <Button type="submit">Adicionar ao carrinho</Button>
      </Card>
    ))}
  </Container>
)

export default FoodsList
