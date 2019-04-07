import styled from 'styled-components'

const HeaderStyles = styled.header`
  .container {
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: white;
  }

  .logo-link {
    display: block;
  }

  .logo {
    width: 115px;
    justify-self: center;
    margin: 18.5px 0;
  }

  .snipcart-checkout {
    position: absolute;
    width: 28px;
    height: 28px;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export default HeaderStyles
