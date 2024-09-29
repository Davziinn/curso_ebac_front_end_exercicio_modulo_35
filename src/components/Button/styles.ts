import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  width: 70px;
  height: 16px;
  top: 4px;
  left: 6px;
  gap: 0px;
  opacity: 0px;
  background-color: ${cores.corTexto};
  color: ${cores.branco};
`

export const ButtonLink = styled(Link)`
font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  width: 70px;
  height: 16px;
  top: 4px;
  left: 6px;
  gap: 0px;
  opacity: 0px;
  background-color: ${cores.corFundo};
  color? ${cores.branco};
`
