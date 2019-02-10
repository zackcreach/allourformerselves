import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProductStyles from './styles/productStyles'

const Product = ({ data: { contentfulProduct: product } }) => {
  const rightRef = useRef()
  const [rightFixed, setRightFixed] = useState(false)

  return (
    <Layout>
      <SEO title={product.name} keywords={[`All Our Former Selves`]} />
      <ProductStyles rightFixed={rightFixed}>
        <main>
          <h1 className="title">{product.name}</h1>
          <section className="container">
            <div className="left">
              {product.images.map(node => (
                <Img
                  className="image-container"
                  fluid={node.fluid}
                  key={node.fluid.src}
                />
              ))}
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
