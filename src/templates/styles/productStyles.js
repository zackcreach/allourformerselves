import styled from 'styled-components'

const ProductStyles = styled.div`
  min-height: calc(100vh - 300px);

  .container {
    @media (min-width: 800px) {
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

    @media (min-width: 800px) {
      padding: 0 15px 0 0;
    }
  }

  .right {
    flex: 1 0 40%;

    @media (min-width: 800px) {
      padding: 0 0 0 15px;
    }
  }

  .gallery {
    width: 50px;
    margin-right: 15px;
    background-color: #f3f3f3;

    @media (min-width: 800px) {
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
    padding-bottom: 30px;
  }

  .description > ul {
    padding-left: 20px;
    list-style-type: square;
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

  h1 + h2 {
    padding-top: 0;
  }

  h2 {
    padding-top: 10px;
    padding-bottom: 13px;
  }

  h3 {
    padding-bottom: 10px;
  }

  .list {
    -webkit-tap-highlight-color: transparent;
  }

  .block {
    font-size: 12px;
    width: 36px;
    height: 35px;
    line-height: 26px;
    font-weight: 300;
    padding-top: 3px;
    color: #333;
    border: 1px solid #333;
    transition: all 0.25s ease;
    user-select: none;
    margin-right: -1px;
  }

  .block[data-category='size']:hover,
  .block[data-category='size']:active {
    color: white;
    background-color: #333;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  form p {
    line-height: 10px;
    padding: 0 15px 0 0;
  }
`

export default ProductStyles
