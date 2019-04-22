import styled, { keyframes } from 'styled-components'

const annoyAnimation = keyframes`
  0% {
    bottom: 17%;
    opacity: 0;
  }
  50% {
    bottom: 15%;
    opacity: 1;
  }
  100% {
    bottom: 13%;
    opacity: 0;
  }
`

const IndexStyles = styled.div`
  .hero {
    height: calc(65vh - var(--header-height));

    @media (min-width: 800px) {
      height: calc(100vh - var(--header-height));
    }
  }

  figure {
    position: relative;
  }

  .arrow-down {
    position: absolute;
    content: '';
    left: 50%;
    transform: rotate(-45deg) translateX(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid #666;
    border-top: none;
    border-right: none;
    border-radius: 2px;
    animation: ${annoyAnimation} 2s infinite linear;

    @media (min-width: 800px) {
      width: 30px;
      height: 30px;
    }
  }

  main {
    padding: 30px 0;
    @media (min-width: 800px) {
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding: 20px;
    text-align: center;
    flex: 0 0 100%;

    @media (min-width: 800px) {
      flex: 0 1 25%;
    }
  }

  h3 {
    padding: 10px 0 5px;
  }

  p {
    color: #999;
    font-size: 14px;
  }

  .thumbnail {
    height: 100vw;

    @media (min-width: 800px) {
      height: 300px;
    }
  }
`

export default IndexStyles
