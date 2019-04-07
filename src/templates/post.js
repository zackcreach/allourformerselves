import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PostStyles from './styles/postStyles'

const Post = ({ data: { contentfulPost: post } }) => {
  return (
    <Layout>
      <SEO />
      <PostStyles>
        <main>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </main>
      </PostStyles>
    </Layout>
  )
}

export default Post

export const PostQuery = graphql`
  query postData($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
