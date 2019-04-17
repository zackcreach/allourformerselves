import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { get } from 'lodash-es'
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

  const title = product.metaTitle || product.title
  const description = get(product, 'metaDescription.metaDescription') || title
  const image =
    get(product, 'metaImage.fixed.src') || get(product, 'mainImage.fixed.src')

  useEffect(() => {
    setActiveUrl(window.location.href)
  }, [])

  const handleClick = event => {
    if (event.target.tagName === 'IMG') {
      setActiveImage(product.images[event.currentTarget.id])
    }
    if (event.target.dataset.category === 'color') {
      setActiveColor(product.colors[event.target.id])
    }
    if (event.target.dataset.category === 'size') {
      setActiveSize(product.sizes[event.target.id])
    }
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={[`All Our Former Selves`]}
      />
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
                <h1>{product.title}</h1>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: product.description.childMarkdownRemark.html,
                  }}
                />
                <div className="options">
                  <h3 className="title">Colors</h3>
                  <div className="list" onClick={handleClick}>
                    {product.colors.map((node, index) => (
                      <button
                        className="block"
                        key={node}
                        id={index}
                        title={node}
                        data-category="color"
                        style={{
                          backgroundColor: node,
                          borderColor: activeColor === node && '#111',
                        }}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
                <div className="options">
                  <h3 className="title">Sizes</h3>
                  <div className="list" onClick={handleClick}>
                    {product.sizes.map((node, index) => (
                      <button
                        className="block"
                        key={node}
                        id={index}
                        title={node}
                        data-category="size"
                        style={{
                          borderColor: activeSize === node && '#111',
                          backgroundColor: activeSize === node && '#111',
                          color: activeSize === node && 'white',
                        }}
                        type="button"
                      >
                        {node}
                      </button>
                    ))}
                  </div>
                </div>
                <form>
                  <p>${product.price}</p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.slug}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-weight="150"
                    data-item-url={activeUrl}
                    data-item-image={image}
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

export const ProductQuery = graphql`
  query productData($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      title
      slug
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      price
      mainImage {
        fixed(width: 1200, height: 630) {
          src
        }
      }
      images {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
      sizes
      colors
      metaTitle
      metaDescription {
        metaDescription
      }
      metaImage {
        fixed(width: 1200, height: 630) {
          src
        }
      }
    }
  }
`

export default Product
