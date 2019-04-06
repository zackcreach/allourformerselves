import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PageStyles from './styles/pageStyles'

const Page = ({ data: { contentfulPage: page } }) => {
  return (
    <Layout>
      <SEO />
      <PageStyles>
        <main>
          <p
            dangerouslySetInnerHTML={{
              __html: page.content.childMarkdownRemark.html,
            }}
          />
        </main>
      </PageStyles>
    </Layout>
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
