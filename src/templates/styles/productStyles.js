import styled from 'styled-components'

const ProductStyles = styled.div`
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
  }

  .block {
    width: 36px;
    height: 35px;
    margin-right: -1px;
  }

  .block[data-category='color']::before {
    display: none;
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

  button {
    font-weight: 300;
    font-size: 12px;
    padding-bottom: 2px;
    width: 140px;
    height: 36px;
    color: black;
    text-transform: uppercase;
    transition: color 0.45s var(--transition-bezier);
    position: relative;
    border: 1px solid #111;
    overflow: hidden;
    z-index: 0;
    cursor: pointer;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
  }

  button:hover {
    color: white;
  }

  button::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #111;
    transform: scale(0, 1);
    transform-origin: right center;
    transition: transform 0.45s var(--transition-bezier);
  }

  button:hover::before {
    transform: scale(1, 1);
    transform-origin: left center;
    background-color: #111;
  }
`

export default ProductStyles
