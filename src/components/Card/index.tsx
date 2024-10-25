import React, { useState } from 'react'
import { CardContainer, Overlay, Sidebar } from './styles'
import Pagamento from '../Pagamento'
import Finalizado from '../Finalizado'

interface CardProps {
  onBackToCart: () => void
  onBackToProducts: () => void
}

const Card: React.FC<CardProps> = ({ onBackToCart, onBackToProducts }) => {
  const [showPagamento, setShowPagamento] = useState(false)
  const [showFinalizado, setShowFinalizado] = useState(false)

  const handleContinuePayment = () => {
    setShowPagamento(true)
  }

  const handleFinalizarPagamento = () => {
    setShowFinalizado(true)
  }

  const handleConcluir = () => {
    setShowFinalizado(false) // Oculta a mensagem de finalização
    onBackToProducts() // Ou redirecione para a lista de produtos conforme necessário
  }

  return (
    <>
      {showFinalizado ? (
        <Finalizado onConcluir={handleConcluir} />
      ) : showPagamento ? (
        <Pagamento
          onBackToAddress={() => setShowPagamento(false)}
          onFinalizarPagamento={handleFinalizarPagamento}
        />
      ) : (
        <CardContainer>
          <Overlay />
          <Sidebar>
            <h2>Entrega</h2>
            <label>Quem irá receber</label>
            <input required type="text" placeholder="Nome do destinatário" />

            <label>Endereço</label>
            <input required type="text" placeholder="Digite o endereço" />

            <label>Cidade</label>
            <input required type="text" placeholder="Digite a cidade" />

            <label>CEP</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                required
                type="text"
                placeholder="CEP"
                style={{ flex: 1 }}
              />
              <input
                required
                type="text"
                placeholder="Número"
                style={{ flex: 1 }}
              />
            </div>

            <label>Complemento (opcional)</label>
            <input type="text" placeholder="Complemento" />

            <button onClick={handleContinuePayment}>
              Continuar com o pagamento
            </button>
            <button className="back-button" onClick={onBackToCart}>
              Voltar para o carrinho
            </button>
          </Sidebar>
        </CardContainer>
      )}
    </>
  )
}

export default Card
