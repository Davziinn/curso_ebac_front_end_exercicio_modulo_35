import { useState } from 'react'
import {
  Container,
  Card,
  Img,
  Title,
  Descricao,
  Button,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalCloseButton,
  ModalTextContent,
  ModalTitle,
  ModalInfo
} from './styles'
import { foods } from './data'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/fechar.png'

const FoodsList = () => {
  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = () => setModalAberto(true)
  const fecharModal = () => setModalAberto(false)

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      fecharModal()
    }
  }

  return (
    <>
      <Container>
        {foods.map((food) => (
          <Card key={food.id}>
            <Img src={food.image} alt={food.title} />
            <Title>{food.title}</Title>
            <Descricao>{food.description}</Descricao>
            <Button onClick={abrirModal}>Adicionar ao carrinho</Button>
          </Card>
        ))}
      </Container>

      <ModalContainer
        className={modalAberto ? 'visible' : ''}
        onClick={handleOutsideClick}
      >
        <ModalContent>
          <ModalImage src={pizza} alt="Pizza Marguerita" />
          <ModalTextContent>
            <ModalTitle>Pizza Marguerita</ModalTitle>
            <ModalDescription>
              A pizza Marguerita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é ideal para qualquer
              ocasião.
            </ModalDescription>
            <ModalInfo>Serve: de 2 a 3 pessoas</ModalInfo>
            <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
          </ModalTextContent>
          <ModalCloseButton onClick={fecharModal}>
            <img src={fechar} alt="Fechar modal" />
          </ModalCloseButton>
        </ModalContent>
      </ModalContainer>
    </>
  )
}

export default FoodsList
