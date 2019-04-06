import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import InfoStyles from './styles/infoStyles'

const Info = ({ data: { contentfulPage: page } }) => {
  return (
    <>
      <SEO />
      <InfoStyles>
        <main>
          <p
            dangerouslySetInnerHTML={{
              __html: page.content.childMarkdownRemark.html,
            }}
          />
        </main>
      </InfoStyles>
    </>
  )
}

export default Info

export const infoQuery = graphql`
  query pageData($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
