import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
`

export const Card = styled.div`
  background-color: ${cores.corTexto};
  width: 30%;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 16px;
`

export const Img = styled.img`
  padding: 8px 8px;
`

export const Title = styled.h2`
  width: 124px;
  font-size: 15px;
  font-weight: bold;
  line-height: 18.75px;
  color: ${cores.branco};
  padding-left: 8px;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.branco};
  padding: 10px 8px;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${cores.corTexto};
  background-color: rgba(255, 235, 217, 1);
  border: none;
  padding: 8px;
  cursor: pointer;
  width: calc(100% - 16px);
  height: auto;
  margin: 8px;

  &:hover {
    background-color: #eee;
  }
`
