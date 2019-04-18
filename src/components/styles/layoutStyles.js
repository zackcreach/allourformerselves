import styled from 'styled-components'

const LayoutStyles = styled.div`
  min-height: calc(100vh - 202px);
  min-height: calc(100vh - var(--footerHeight));
  padding-top: 50px;

  @media (min-width: 500px) {
    padding-top: 92px;
  }
`

LayoutStyles.defaultProps = {
  footerHeight: 0,
}

export default LayoutStyles
