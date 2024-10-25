import { CheckoutContainer, Overlay, MensagemFinalizado } from './styles'
import { useNavigate } from 'react-router-dom'

interface FinalizadoProps {
  onConcluir: () => void
}

const Finalizado: React.FC<FinalizadoProps> = ({ onConcluir }) => {
  const navigate = useNavigate()

  const handleConcluir = () => {
    onConcluir() // Chama a função passada como prop
    navigate('/') // Redireciona para a tela inicial
  }

  return (
    <CheckoutContainer>
      <Overlay />
      <MensagemFinalizado>
        <h1>Pedido realizado - ORDER_ID</h1>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          arealizar cobranças extras. <br />
          <br /> Lembre-se da importância de higienizar as mãos após o
          recebimento do pedido, garantindo assim sua segurança e bem-estar
          durante a refeição. <br />
          <br /> Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <button onClick={handleConcluir}>Concluir</button>
      </MensagemFinalizado>
    </CheckoutContainer>
  )
}

export default Finalizado
