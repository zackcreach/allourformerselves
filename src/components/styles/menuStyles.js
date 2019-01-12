import styled from 'styled-components'

const MenuStyles = styled.div`
  .hamburger {
    position: absolute;
    margin: 0;
    width: 25px;
    height: 20px;
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
    bottom: 0;
    height: 100%;
    width: 350px;
    background: blue;
  }
`

export default MenuStyles
