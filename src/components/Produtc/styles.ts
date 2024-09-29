import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.corCard};
  width: 472px;
  border: 1px solid ${cores.corTexto};
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  padding: 4px 8px 0;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 8px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  border-bottom: 1px solid ${cores.corTexto};
  padding: 0;
`

export const Button = styled.button`
  background-color: ${cores.corTexto};
  color: ${cores.branco};
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  margin: 8px 8px;
  align-self: flex-start;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${cores.corTexto};
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
