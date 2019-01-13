import styled from 'styled-components'

const HeaderStyles = styled.header`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: white;
  }

  .logo-link {
    display: block;
  }

  .logo {
    width: 110px;
    justify-self: center;
    margin: 20px 0;
  }
`

export default HeaderStyles