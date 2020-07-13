import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(var(--linearUp), var(--linearDown));
  }
  html {
    min-height: 100%;
  }

  :root {
    --blackBlack: #000000;
    --linearUp: #28007D;
    --linearDown: #9C0494;
    --white-ice: #F5F5F5;
    --white-ele: #FEFEFE;
  }
`