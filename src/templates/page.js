import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { graphql } from 'gatsby'
import { get } from 'lodash-es'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import SEO from '../components/seo'

import PageStyles from './styles/pageStyles'

const Page = ({ data: { contentfulPage: page } }) => {
  const [modifiedHtml, setModifiedHtml] = useState(
    page.content.childMarkdownRemark.html
  )

  const title = page.metaTitle || page.title
  const description = get(page, 'metaDescription.metaDescription') || title
  const image =
    get(page, 'metaImage.fixed.src') || get(page, 'mainImage.fixed.src')

  // ComponentDidMount, basically, due to []
  useEffect(() => {
    renderLinksBlank()
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

  const renderLinksBlank = () => {
    setModifiedHtml(
      page.content.childMarkdownRemark.html.replace(/<a/g, `<a target='_blank'`)
    )
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
        keywords={[`All Our Former Selves`]}
      />
      <PageStyles>
        <main>
          <div
            dangerouslySetInnerHTML={{
              __html: modifiedHtml,
            }}
          />
        </main>
      </PageStyles>
    </Layout>
  )
}

export default Page

export const PageQuery = graphql`
  query pageData($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
