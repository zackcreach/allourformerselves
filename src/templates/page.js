import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash-es'

import Layout from '../components/layout'
import SEO from '../components/seo'

import PageStyles from './styles/pageStyles'

const Page = ({ data: { contentfulPage: page } }) => {
  const [modifiedHtml, setModifiedHtml] = useState(
    page.content.childMarkdownRemark.html
  )

  const title = page.metaTitle || page.title
  const description =
    get(page, 'metaDescription.metaDescription') ||
    (get(page, 'description.description') &&
      page.description.description.split('. ')[0]) ||
    title
  const image =
    get(page, 'metaImage.fixed.src') || get(page, 'mainImage.fixed.src')

  useEffect(() => {
    setModifiedHtml(
      page.content.childMarkdownRemark.html.replace(/<a/g, `<a target='_blank'`)
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
    }
  }
`
