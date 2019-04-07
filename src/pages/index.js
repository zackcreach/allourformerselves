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
        <Img
          fluid={data.contentfulAsset.fluid}
          imgStyle={{ objectPosition: 'center top' }}
          className="hero"
        />
        <main>
          <ul>
            {data.allContentfulProduct.edges.map(({ node }, index) => (
              <li key={`${index} – ${node.name}`}>
                <Link to={node.slug}>
                  <figure>
                    <Img
                      fluid={node.thumbnail.fluid}
                      className="thumbnail"
                      alt={node.name}
                    />
                    <figcaption>
                      <h3>{node.name}</h3>
                      <p>${node.price}</p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </IndexStyles>
    </Layout>
  )
}

export default IndexPage

export const ProductsQuery = graphql`
  query {
    contentfulAsset(title: { regex: "/33/" }) {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    allContentfulProduct(sort: { fields: [order, name], order: [ASC, ASC] }) {
      edges {
        node {
          name
          price
          slug
          thumbnail {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
