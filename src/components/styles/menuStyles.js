import styled from 'styled-components'
import PropTypes from 'prop-types'

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

  .mask__content {
    height: 100%;
    width: 100%;
  }

  .mask {
    position: fixed;
    top: ${props => props.containerRef || '100%'};
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity ${props => props.animationDuration / 1000}s ease-out;
  }

  .mask-enter {
    opacity: 0;
  }

  .mask-enter-active {
    opacity: 1;
  }

  .mask-exit {
    opacity: 1;
  }

  .mask-exit-active {
    opacity: 0;
  }

  main {
    position: absolute;
    padding: 0;
    left: 0;
    top: 100%;
    height: calc(100vh - ${props => props.containerRef || '100%'});
    width: 100%;
    background: #111;

    @media (min-width: ${props => props.theme.width.medium}) {
      width: 300px;
    }
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

  .slide-right {
    transition: transform ${props => props.animationDuration / 1000}s ease-out;
  }

  .slide-right-enter {
    transform: translateX(-100%);
  }

  .slide-right-enter-active {
    transform: translateX(0);
  }

  .slide-right-exit {
    transform: translateX(0);
  }

  .slide-right-exit-active {
    transform: translateX(-100%);
  }
`

MenuStyles.propTypes = {
  containerRef: PropTypes.string,
  animationDuration: PropTypes.number,
}

export default MenuStyles
