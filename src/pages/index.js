import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import IndexStyles from './styles/indexStyles'

const IndexPage = () => (
  <Layout>
    <IndexStyles>
      <SEO title="All Our Former Selves" keywords={[`All Our Former Selves`]} />
    </IndexStyles>
  </Layout>
)

export default IndexPage
