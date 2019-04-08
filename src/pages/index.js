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
          fluid={data.contentfulPage.mainImage.fluid}
          imgStyle={{ objectPosition: 'center top' }}
          className="hero"
        />
        <main>
          <ul>
            {data.allContentfulProduct.edges.map(({ node }, index) => (
              <li key={node.title}>
                <Link to={node.slug}>
                  <figure>
                    <Img
                      fluid={node.mainImage.fluid}
                      className="thumbnail"
                      alt={node.title}
                    />
                    <figcaption>
                      <h3>{node.title}</h3>
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
    contentfulPage(title: { regex: "/home/i" }) {
      mainImage {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    allContentfulProduct(sort: { fields: [order, title], order: [ASC, ASC] }) {
      edges {
        node {
          title
          price
          slug
          mainImage {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
