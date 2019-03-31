import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Img from 'gatsby-image'

import SEO from '../components/seo'

import PageStyles from './styles/pageStyles'

const Page = ({ data: { contentfulPage: page } }) => {
  return (
    <>
      <SEO title={page.name} keywords={[`All Our Former Selves`]} />
      <PageStyles>
        <main>
          <section className="container">
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: page.content.content,
              }}
            />
          </section>
        </main>
      </PageStyles>
    </>
  )
}

export const pageQuery = graphql`
  query pageData($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
      content {
        content
      }
    }
  }
`

export default Product
