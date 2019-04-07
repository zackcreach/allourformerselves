import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PostStyles from './styles/postStyles'

const Post = ({ data: { contentfulPost: post } }) => {
  const [modifiedHtml, setModifiedHtml] = useState(
    post.content.childMarkdownRemark.html
  )

  useEffect(() => {
    setModifiedHtml(
      post.content.childMarkdownRemark.html.replace(/<a/g, `<a target='_blank'`)
    )
  }, [])

  return (
    <Layout>
      <SEO />
      <PostStyles>
        <main>
          <div
            dangerouslySetInnerHTML={{
              __html: modifiedHtml,
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
