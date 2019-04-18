import styled from 'styled-components'

const ContactFormStyles = styled.div`
  .thanks p {
    padding-bottom: 8px;
  }

  .hidden {
    display: none;
    visibility: none;
  }

  button {
    margin-top: 10px;
  }

  button {
    color: white;
    background-color: #111;
  }

  button:hover {
    color: #111;
  }

  button::before {
    background-color: white;
  }

  button:hover::before {
    background-color: white;
  }
`

export default ContactFormStyles
