import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash-es'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PostStyles from './styles/postStyles'

const Post = ({ data: { contentfulPost: post } }) => {
  const [modifiedHtml, setModifiedHtml] = useState(
    post.content.childMarkdownRemark.html
  )

  const title = post.metaTitle || post.title
  const description = get(post, 'metaDescription.metaDescription') || title
  const image =
    get(post, 'metaImage.fixed.src') || get(post, 'mainImage.fixed.src')

  useEffect(() => {
    setModifiedHtml(
      post.content.childMarkdownRemark.html.replace(/<a/g, `<a target='_blank'`)
    )
  }, [])

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={[`All Our Former Selves`]}
      />
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
  }
`
