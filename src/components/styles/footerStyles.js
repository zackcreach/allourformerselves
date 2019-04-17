import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: #111;

  .container {
    padding: 30px 30px 20px;
    margin: 0 auto;
    max-width: 1200px;
  }

  .logo-link {
    display: block;
  }

  .logo {
    width: 80px;
    justify-self: center;
    margin: 5px 0 20px;
  }

  nav {
  }

  a,
  svg {
    transition: all 0.5s ease;
  }

  a:hover,
  a:active {
    color: white;
  }

  a:hover > svg,
  a:active > svg {
    stroke: #ccc;
  }

  nav > a {
    color: #ccc;
    display: inline-block;
    font-weight: 300;
    padding-right: 12px;
    text-transform: uppercase;
    font-size: 12px;
    transition: all 0.5s ease;
  }

  .bottom {
    padding: 16px 0 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px 0;
  }

  .copywrite {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 2;
    color: #555;
  }

  .social {
    width: 24px;
    height: 24px;
  }
`

export default FooterStyles
