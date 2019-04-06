import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProductStyles from './styles/productStyles'

const Product = ({ data: { contentfulProduct: product } }) => {
  const rightRef = useRef()
  const [activeUrl, setActiveUrl] = useState(
    `https://allourformerselves.com/${product.slug}`
  )
  const [activeImage, setActiveImage] = useState(product.images[0])
  const [activeSize, setActiveSize] = useState(product.sizes[0])
  const [activeColor, setActiveColor] = useState(product.colors[0])

  const animationDuration = 300

  useEffect(() => {
    setActiveUrl(window.location.href)
  }, [])

  const handleClick = event => {
    if (event.target.tagName === 'IMG') {
      setActiveImage(product.images[event.currentTarget.id])
    }
    if (event.target.className === 'colors__block') {
      setActiveColor(product.colors[event.target.id])
    }
    if (event.target.className === 'sizes__block') {
      setActiveSize(product.sizes[event.target.id])
    }
  }

  return (
    <Layout>
      <SEO title={product.name} keywords={[`All Our Former Selves`]} />
      <ProductStyles activeImage={activeImage}>
        <main>
          <section className="container">
            <div className="left">
              <div className="gallery">
                {product.images.map((node, index) => (
                  <div
                    className="gallery-image-container"
                    onClick={handleClick}
                    key={node.fluid.src}
                    id={index}
                  >
                    <Img className="gallery-image" fluid={node.fluid} />
                  </div>
                ))}
              </div>
              <div className="viewer">
                <TransitionGroup>
                  <CSSTransition
                    className="viewer-container"
                    classNames="mask"
                    timeout={{
                      enter: animationDuration,
                      exit: animationDuration,
                    }}
                  >
                    <Img className="viewer-image" fluid={activeImage.fluid} />
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
            <div className="right">
              <div className="right__container" ref={rightRef}>
                <h1>{product.name}</h1>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: product.description.childMarkdownRemark.html,
                  }}
                />
                <div className="options">
                  <h3 className="title">Colors</h3>
                  <ul className="list colors" onClick={handleClick}>
                    {product.colors.map((node, index) => (
                      <li
                        className="colors__block"
                        style={{
                          backgroundColor: node,
                          borderColor: activeColor === node && 'black',
                        }}
                        key={node}
                        id={index}
                      />
                    ))}
                  </ul>
                </div>
                <div className="options">
                  <h3 className="title">Sizes</h3>
                  <ul className="list sizes" onClick={handleClick}>
                    {product.sizes.map((node, index) => (
                      <li
                        className="sizes__block"
                        key={node}
                        id={index}
                        style={{
                          borderColor: activeSize === node && '#333',
                          backgroundColor: activeSize === node && '#333',
                          color: activeSize === node && 'white',
                        }}
                      >
                        {node}
                      </li>
                    ))}
                  </ul>
                </div>
                <form>
                  <p>${product.price}</p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-url={activeUrl}
                    data-item-custom1-name="Size"
                    data-item-custom1-options={product.sizes.join('|')}
                    data-item-custom1-value={activeSize}
                    data-item-custom2-name="Color"
                    data-item-custom2-options={product.colors.join('|')}
                    data-item-custom2-value={activeColor}
                    type="button"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </ProductStyles>
    </Layout>
  )
}

export const productQuery = graphql`
  query productData($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      name
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      price
      images {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
      sizes
      colors
    }
  }
`

export default Product
