import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProductStyles from './styles/productStyles'

const Product = ({ data: { contentfulProduct: product } }) => {
  return (
    <Layout>
      <SEO title={product.name} keywords={[`All Our Former Selves`]} />
      <ProductStyles>
        <main>
          <h1 className="title">{product.name}</h1>
          <section className="container">
            <div className="left">
              {product.images.map(node => (
                <Img fluid={node.fluid} />
              ))}
            </div>
            <div className="right">asdf</div>
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
