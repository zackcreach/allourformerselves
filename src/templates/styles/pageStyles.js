import styled from 'styled-components'

const PageStyles = styled.header`
  .container {
    @media (min-width: ${props => props.theme.width.medium}) {
      display: flex;
      align-items: flex-start;
    }
  }

  .image-container {
    margin: 0 0 1px 0;
  }

  .left {
    display: flex;
    flex: 0 0 60%;
    padding: 0 0 30px 0;

    @media (min-width: ${props => props.theme.width.medium}) {
      padding: 0 15px 0 0;
    }
  }

  .right {
    flex: 1 0 40%;

    @media (min-width: ${props => props.theme.width.medium}) {
      padding: 0 0 0 15px;
    }
  }

  .gallery {
    width: 50px;
    margin-right: 15px;
    background-color: #f3f3f3;

    @media (min-width: ${props => props.theme.width.medium}) {
      background-color: transparent;
    }
  }

  .gallery-image-container {
    cursor: pointer;
  }

  .gallery-image {
    height: 70px;
  }

  .viewer {
    width: 100%;
  }

  .description {
    padding-bottom: 18px;
  }

  .options {
    display: inline-block;
    vertical-align: top;
    margin-right: 30px;
  }

  .list {
    display: inline-block;
    list-style: none;
    display: flex;
    text-align: center;
    padding-bottom: 20px;
    cursor: pointer;
  }

  h1 {
    padding-bottom: 20px;
    margin-top: -5px;
  }

  h3 {
    padding-bottom: 14px;
  }

  .colors {
  }

  .colors__block {
    width: 30px;
    height: 30px;
    margin-right: 6px;
    border: 1px solid ${props => props.theme.color.secondary};
    transition: all 0.25s ease;
  }

  .sizes {
  }

  .sizes__block {
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 26px;
    margin-right: 6px;
    font-weight: 300;
    color: ${props => props.theme.color.secondary};
    border: 1px solid ${props => props.theme.color.secondary};
    transition: all 0.25s ease;
  }

  input {
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.theme.color.secondary};
    text-align: center;
    margin-right: 6px;
  }

  button {
    font-family: ${props => props.theme.font.secondary};
    font-weight: 300;
    font-size: 12px;
    padding-bottom: 2px;
    margin-top: 10px;
    width: 100%;
    background-color: ${props => props.theme.color.primary};
    color: white;
    text-transform: uppercase;
    border: none;
    height: 36px;
    cursor: pointer;
    transition: all 0.25s ease;

    @media (min-width: ${props => props.theme.width.small}) {
      width: 140px;
    }
  }

  button:hover {
    background-color: black;
  }
`

export default ProductStyles
