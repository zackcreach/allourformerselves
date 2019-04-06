import { createGlobalStyle } from 'styled-components'
import '../../../static/fonts/IBMPlexSans.css'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
    color: #333;
  }

  img {
    vertical-align: top;
  }
  
  a {
    color: #333;
    text-decoration: none;
  }

  main {
    padding: 40px 30px;
    margin: 0 auto;
    max-width: 1200px;
  }

  h1 {
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    text-transform: uppercase;
    padding-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h3 {
    font-size: 15px;
    line-height: 22px;
    font-weight: 300;
    text-transform: uppercase;
  }

  p, ul {
    font-size: 15px;
    line-height: 23px;
    color: #333;
    font-weight: 300;
    padding-bottom: 20px;
  }
`

export default GlobalStyles
