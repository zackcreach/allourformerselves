import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProductStyles from './styles/productStyles'

const Product = ({ data: { contentfulProduct: product } }) => {
  const rightRef = useRef()
  const [rightFixed, setRightFixed] = useState(false)
  const [activeImage, setActiveImage] = useState(product.images[0])

  const animationDuration = 300

  const handleClick = event => {
    setActiveImage(product.images[event.currentTarget.id])
  }

  return (
    <Layout>
      <SEO title={product.name} keywords={[`All Our Former Selves`]} />
      <ProductStyles rightFixed={rightFixed} activeImage={activeImage}>
        <main>
          <h1 className="title">{product.name}</h1>
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
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: product.description.description,
                  }}
                />
                <div className="options">
                  <h3 className="title">Colors</h3>
                  <ul className="list colors">
                    {product.colors.map(node => (
                      <li
                        className="colors__block"
                        style={{ backgroundColor: node }}
                        key={node}
                      />
                    ))}
                  </ul>
                </div>
                <div className="options">
                  <h3 className="title">Sizes</h3>
                  <ul className="list sizes">
                    {product.sizes.map(node => (
                      <li className="sizes__block" key={node}>
                        {node}
                      </li>
                    ))}
                  </ul>
                </div>
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
        description
      }
      price
      images {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
      sizes
      colors
    }
  }
`

export default Product
