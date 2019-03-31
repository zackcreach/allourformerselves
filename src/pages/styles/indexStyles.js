import styled from 'styled-components'

const IndexStyles = styled.div`
  .hero {
    height: calc(100vh - 92px);
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${props => props.theme.width.medium}) {
      padding: 0 20px;
    }
  }

  li {
    padding: 20px;
    text-align: center;
    flex: 0 0 100%;

    @media (min-width: ${props => props.theme.width.medium}) {
      flex: 0 1 25%;
    }
  }

  h3 {
    padding: 10px 0 5px;
  }

  p {
    font-family: ${props => props.theme.font.secondary};
    color: ${props => props.theme.color.secondary};
    font-size: 14px;
  }

  .thumbnail {
    height: 100vw;

    @media (min-width: ${props => props.theme.width.medium}) {
      height: 25vw;
    }
  }
`

export default IndexStyles
