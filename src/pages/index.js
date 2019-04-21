import React from 'react'
import { Link, graphql } from 'gatsby'
import { get } from 'lodash-es'
import Img from 'gatsby-image'

import SEO from '../components/seo'

import IndexStyles from './styles/indexStyles'

const IndexPage = ({
  data: { contentfulPage: page, allContentfulProduct: products },
}) => {
  const title = page.metaTitle || page.title
  const description = get(page, 'metaDescription.metaDescription') || title
  const image =
    get(page, 'metaImage.fixed.src') || get(page, 'mainImage.fixed.src')

  return (
    <IndexStyles>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={[`All Our Former Selves`]}
      />
      <figure>
        <Img
          fluid={page.mainImage.fluid}
          imgStyle={{ objectPosition: 'center top' }}
          className="hero"
        />
        <div className="arrow-down" />
      </figure>
      <main>
        <ul>
          {products.edges.map(({ node }, index) => (
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
