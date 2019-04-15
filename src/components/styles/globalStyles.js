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
    padding: 40px 30px 120px;
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

  input, textarea {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    font-size: 13px;
    line-height: 20px;
    color: #333;
    font-weight: 300;
    padding: 0 12px;
    transition: border .66s ease;

    @media (min-width: 550px) {
      max-width: 400px;
    }
  }

  input:hover, 
  input:focus, 
  input:active, 
  textarea:hover, 
  textarea:focus, 
  textarea:active {
    border-color: #333;
  }

  input {
    height: 36px;
  }

  textarea {
    height: 100px;
    padding-top: 6px;
  }

  button {
    font-weight: 300;
    font-size: 12px;
    padding-bottom: 2px;
    width: 140px;
    background-color: #333;
    color: white;
    text-transform: uppercase;
    border: none;
    height: 36px;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  button:hover {
    background-color: black;
  }

  button:disabled {
    opacity: 0.5;
    background-color: #333;
    cursor: wait;
  }
`

export default GlobalStyles
