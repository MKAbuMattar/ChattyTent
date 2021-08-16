import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
}

.mt-20 {
  margin-top: 20px;
}
`