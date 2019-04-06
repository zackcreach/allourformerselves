import styled from 'styled-components'

const IndexStyles = styled.div`
  .hero {
    height: calc(100vh - 92px);
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
