import { createGlobalStyle } from 'styled-components'
import '../../../static/fonts/IBMPlexSans.css'

const GlobalStyles = createGlobalStyle`
  :root {
    --width-small: 400px;
    --width-medium: 800px;
    --width-large: 1200px;
    
    --header-height: 96px;
    --footer-height: 202px;
    
    --transition-duration: 0.45s;
    --transition-bezier: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

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
    padding: 30px 30px 50px;
    margin: 0 auto;
    max-width: 1200px;

    @media (min-width: 500px) {
    padding: 40px 30px 120px;
    }
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

  form {
    margin-bottom: 30px;
  }

  button {
    outline: none;
    user-select: none;
    background: transparent;
  }

  button[type='submit'] {
    font-weight: 300;
    font-size: 12px;
    padding-bottom: 2px;
    width: 140px;
    height: 36px;
    color: black;
    text-transform: uppercase;
    transition: color 0.45s var(--transition-bezier);
    position: relative;
    border: 1px solid #111;
    overflow: hidden;
    z-index: 0;
    cursor: pointer;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
  }

  button[type='submit']:hover {
    color: white;
  }

  button[type='submit']::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #111;
    transform: scale(0, 1);
    transform-origin: right center;
    transition: transform 0.45s var(--transition-bezier);
  }

  button[type='submit']:hover::before {
    transform: scale(1, 1);
    transform-origin: left center;
    background-color: #111;
  }

  button[type='submit']:disabled {
    opacity: 0.5;
    background-color: #111;
    cursor: wait;
  }

  .snip-layout.snip-active {
    z-index: 1040;
    pointer-events: all;
  }

  .snip-layout.snip-active::before {
    opacity: 1;
  }

  .snip-layout__main-container {
      transition: transform 0.45s var(--transition-bezier);
      transform: translateX(100%);
  }

  .snip-active > .snip-layout__main-container {
      transform: translateX(0%);
  }
`

export default GlobalStyles
