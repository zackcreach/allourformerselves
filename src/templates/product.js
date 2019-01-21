import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProductStyles from './styles/productStyles'

const Product = ({ data: { contentfulProduct: product } }) => {
  console.log(product)
  return (
    <Layout>
      <ProductStyles>
        <SEO title={product.name} keywords={[`All Our Former Selves`]} />
        {product.images.map(node => (
          <Img sizes={node.sizes} />
        ))}
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
        sizes(maxWidth: 1280) {
          ...GatsbyContentfulSizes
        }
      }
      sizes
      colors
    }
  }
`

export default Product
