import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import IndexStyles from './styles/indexStyles'

import logo from '../images/logo--black.svg'

const IndexPage = () => (
  <Layout>
    <IndexStyles>
      <SEO title="All Our Former Selves" keywords={[`All Our Former Selves`]} />
      <img src={logo} />
    </IndexStyles>
  </Layout>
)

export default IndexPage
