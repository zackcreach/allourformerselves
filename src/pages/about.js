import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AboutStyles from './styles/aboutStyles'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <AboutStyles>
        <main>
          <p>{data.contentfulPage.content.content}</p>
        </main>
      </AboutStyles>
    </Layout>
  )
}

export default AboutPage

export const ProductsQuery = graphql`
  query {
    contentfulPage(title: { eq: "About" }) {
      title
      content {
        content
      }
      # images {
      #   fluid(maxWidth: 1500) {
      #     ...GatsbyContentfulFluid_noBase64
      #   }
      # }
    }
  }
`
