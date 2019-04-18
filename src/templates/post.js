import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { graphql } from 'gatsby'
import { get } from 'lodash-es'

import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

import PostStyles from './styles/postStyles'

const Post = ({ data: { contentfulPost: post } }) => {
  const [modifiedHtml, setModifiedHtml] = useState(
    post.content.childMarkdownRemark.html
  )

  const title = post.metaTitle || post.title
  const description = get(post, 'metaDescription.metaDescription') || title
  const image =
    get(post, 'metaImage.fixed.src') || get(post, 'mainImage.fixed.src')

  // ComponentDidMount
  useEffect(() => {
    setModifiedHtml(
      post.content.childMarkdownRemark.html.replace(/<a/g, `<a target='_blank'`)
    )
  }, [])

  // ComponentDidUpdate
  useEffect(() => {
    renderContactForm()
  })

  const renderContactForm = () => {
    const modules = document.querySelectorAll('.module-contact')

    if (modules.length > 0) {
      const modulesArray = Array.from(modules)
      modulesArray.map(node => ReactDOM.render(<ContactForm />, node))
    }
  }

  return (
    <PostStyles>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={[`All Our Former Selves`]}
      />
      <main>
        <div
          dangerouslySetInnerHTML={{
            __html: modifiedHtml,
          }}
        />
      </main>
    </PostStyles>
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
