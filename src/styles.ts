import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#e66767',
  corFundo: '#ffebd9',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.branco};
  color: ${cores.corTexto};
}
`
