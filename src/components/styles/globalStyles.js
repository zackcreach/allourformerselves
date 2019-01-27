import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.primary};
  }

  img {
    vertical-align: top;
  }
  
  a {
    color: ${props => props.theme.color.primary};
    text-decoration: none;
  }

  main {
    padding: 40px 20px;
    margin: 0 auto;
    max-width: 1240px;
  }

  h1 {
    font-family: ${props => props.theme.font.secondary};
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
  }

  h2 {
    font-family: ${props => props.theme.font.secondary};
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
  }
`

export default GlobalStyles
