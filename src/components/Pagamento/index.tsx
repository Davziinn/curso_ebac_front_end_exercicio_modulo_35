import { CheckoutContainer, PaymentForm, Overlay } from './styles'

interface PagamentoProps {
  onBackToAddress: () => void
  onFinalizarPagamento: () => void
}

const Pagamento: React.FC<PagamentoProps> = ({
  onBackToAddress,
  onFinalizarPagamento
}) => {
  return (
    <CheckoutContainer>
      <PaymentForm>
        <h2>Pagamento - Valor a pagar R$ 190,90</h2>

        <label>Nome no cartão</label>
        <input type="text" />

        <label>Número do cartão</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Número do cartão"
            style={{ flex: 2 }}
          />
          <input type="text" placeholder="CVV" style={{ flex: 1 }} />
        </div>

        <label>Mês de vencimento</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Mês de vencimento"
            style={{ flex: 1 }}
          />
          <input
            type="text"
            placeholder="Ano de vencimento"
            style={{ flex: 1 }}
          />
        </div>

        <button onClick={onFinalizarPagamento}>Finalizar pagamento</button>
        <button onClick={onBackToAddress}>
          Voltar para a edição de endereço
        </button>
      </PaymentForm>
      <Overlay />
    </CheckoutContainer>
  )
}

export default Pagamento
