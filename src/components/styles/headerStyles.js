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

  .snipcart-summary {
    position: absolute;
    top: -9px;
    left: 9.5px;
    width: 14px;
    text-align: center;
    font-size: 9px;
    transition: opacity 0.45s var(--transition-bezier);
    color: #666;
    opacity: 1;

    @media (min-width: 500px) {
      top: -12px;
      font-size: 10px;
    }
  }

  .snipcart-summary-empty {
    opacity: 0;
    transition: none;
  }

  .snipcart-total-items {
    display: block;
  }
`

export default HeaderStyles
