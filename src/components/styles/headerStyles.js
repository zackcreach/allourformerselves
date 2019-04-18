import styled from 'styled-components'

const HeaderStyles = styled.header`
  .container {
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;

    @media (min-width: 500px) {
      border-color: rgba(0, 0, 0, 0.1);
    }
  }

  .logo-link {
    display: block;
  }

  .logo {
    justify-self: center;
    width: 80px;
    margin: 12px 0;

    @media (min-width: 500px) {
      width: 100px;
      margin: 24px 0;
    }
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
