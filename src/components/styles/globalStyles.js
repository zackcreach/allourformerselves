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
  
  a {
    color: ${props => props.theme.color.primary};
    text-decoration: none;
  }
`

export default GlobalStyles
