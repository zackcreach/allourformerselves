import styled from 'styled-components'

const MenuStyles = styled.div`
  figure {
    position: absolute;
    margin: 0;
    width: 28px;
    height: 18px;
    top: 50%;
    left: 30px;
    transform: translate3d(0, -50%, 0);
    border-top: 1px solid ${props => props.theme.color.secondary};
    border-bottom: 1px solid ${props => props.theme.color.secondary};
    cursor: pointer;

    &::after {
      position: absolute;
      content: '';
      height: 1px;
      top: 50%;
      width: 100%;
      transform: translate3d(0, -50%, 0);
      background-color: ${props => props.theme.color.secondary};
    }
  }

  main {
    position: absolute;
    left: 0;
    top: 100%;
    height: calc(100vh - 100%);
    width: 100%;
    background: #111;

    @media (min-width: ${props => props.theme.width.medium}) {
    width: 300px;
    }
    )
  }

  a {
    font-family: ${props => props.theme.font.secondary};
    user-select: none;
    color: #ccc;
    display: block;
    font-weight: 300;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 15px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

export default MenuStyles
