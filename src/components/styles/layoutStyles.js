import styled from 'styled-components'

const LayoutStyles = styled.div`
  min-height: calc(100vh - var(--footer-height));
  padding-top: var(--header-height);
`

LayoutStyles.defaultProps = {}

export default LayoutStyles
