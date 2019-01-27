import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import IndexStyles from './styles/indexStyles'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <IndexStyles>
        <ul>
          {data.allContentfulProduct.edges.map(({ node }, index) => (
            <li key={`${index} – ${node.name}`}>
              <Link to={node.slug}>
                <Img
                  fluid={node.images[0].fluid}
                  className="image-container"
                  imgStyle={{ objectPosition: 'center top' }}
                  alt={node.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </IndexStyles>
    </Layout>
  )
}

export default IndexPage

export const ProductsQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          name
          slug
          images {
            fluid(maxWidth: 1300) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
