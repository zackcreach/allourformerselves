import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NotFoundStyles from './styles/notFoundStyles'

const NotFoundPage = () => (
  <Layout>
    <NotFoundStyles>
      <main>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>Something went wrong here.</p>
      </main>
    </NotFoundStyles>
  </Layout>
)

export default NotFoundPage
