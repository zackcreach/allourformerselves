import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import PageStyles from './styles/pageStyles'

const Page = ({ data }) => {
  return (
    <>
      <SEO />
      <PageStyles>
        <main>
          <p
            dangerouslySetInnerHTML={{
              __html: data.contentfulPage.content.childMarkdownRemark.html,
            }}
          />
        </main>
      </PageStyles>
    </>
  )
}

export default Page

export const pageQuery = graphql`
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
