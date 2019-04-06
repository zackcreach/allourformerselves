import styled from 'styled-components'

const PageStyles = styled.header`
  .container {
    @media (min-width: ${props => props.theme.width.medium}) {
      display: flex;
      align-items: flex-start;
    }
  }

  h1 {
    padding-bottom: 25px;
  }

  h1 + h2 {
    padding-top: 0;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 13px;
  }

  h3 {
    padding-bottom: 14px;
  }

  a {
    text-decoration: underline;
  }
`

export default PageStyles
