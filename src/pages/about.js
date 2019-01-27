import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import AboutStyles from './styles/AboutStyles'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <AboutStyles>
        <main>{data.contentfulPage.content.content}</main>
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
