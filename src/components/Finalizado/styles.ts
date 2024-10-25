import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const MensagemFinalizado = styled.div`
  background-color: rgba(230, 103, 103, 1);
  padding: 24px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;

  h1 {
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    line-height: 18.75px;
    text-align: left;
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    color: rgba(255, 235, 217, 1);
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    height: 24px;
    top: 377px;
    left: 1014px;
    background-color: #ffebd9;
    color: #e66767;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #ffe8e8;
    }
  }
`
