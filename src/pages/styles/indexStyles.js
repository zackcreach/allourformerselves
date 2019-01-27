import styled from 'styled-components'

const IndexStyles = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .image-container {
    height: calc(100vh - 92px);
    min-height: 100vw;
    /* filter: saturate(0%) contrast(120%); */
    position: relative;
  }

  .image-container::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: background-color 1s ease-out;
  }

  a:hover .image-container::after {
    background-color: none;
  }
`

export default IndexStyles
