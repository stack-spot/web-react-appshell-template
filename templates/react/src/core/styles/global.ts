import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #f1f2f3;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,
        Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
`
