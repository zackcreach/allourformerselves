import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import AboutStyles from './styles/aboutStyles'

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO />
      <AboutStyles>
        <main>
          <p
            dangerouslySetInnerHTML={{
              __html: data.contentfulPage.content.childMarkdownRemark.html,
            }}
          />
        </main>
      </AboutStyles>
    </>
  )
}

export default AboutPage

export const PageQuery = graphql`
  query {
    contentfulPage(title: { eq: "About" }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
