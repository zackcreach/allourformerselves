import styled from 'styled-components'

const ProductStyles = styled.header`
  .container {
    @media (min-width: ${props => props.theme.width.medium}) {
      display: flex;
    }
  }

  .image-container {
    margin: 0 0 1px 0;
  }

  .left {
    display: flex;
    flex: 0 0 60%;
    padding: 0 0 20px 0;

    @media (min-width: ${props => props.theme.width.medium}) {
      padding: 0 10px 0 0;
    }
  }

  .right {
    flex: 1 0 40%;

    @media (min-width: ${props => props.theme.width.medium}) {
      padding: 0 0 0 10px;
    }
  }

  .gallery {
    width: 50px;
    margin-right: 5px;
  }

  .gallery {
  }

  .gallery-image-container {
    margin-bottom: 4px;
    border: 1px solid white;
    cursor: pointer;
  }

  .gallery-image {
    height: 70px;
  }

  .viewer {
    width: 100%;
  }

  .description {
    padding-bottom: 30px;
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

  .title {
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
    width: 200px;
    background-color: ${props => props.theme.color.primary};
    color: white;
    text-transform: uppercase;
    border: none;
    height: 35px;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  button:hover {
    background-color: black;
  }
`

export default ProductStyles
