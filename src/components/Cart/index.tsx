import React from 'react'
import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItems,
  CartItem,
  ItemDetails,
  ItemName,
  ItemPrice,
  ItemImage,
  ItemRemove,
  TotalContainer,
  TotalPrice,
  ContinueButton
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getTotalPrice = (): number => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <CartItems>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.foto} alt={item.nome} />
              <ItemDetails>
                <ItemName>{item.nome}</ItemName>
                <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
              </ItemDetails>
              <ItemRemove onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </CartItems>
        <TotalContainer>
          <span>Valor total</span>
          <TotalPrice>{formatPrice(getTotalPrice())}</TotalPrice>
        </TotalContainer>
        <ContinueButton>Continuar com a entrega</ContinueButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
