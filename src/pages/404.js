import React from 'react'

import SEO from '../components/seo'

import NotFoundStyles from './styles/notFoundStyles'

const NotFoundPage = () => (
  <NotFoundStyles>
    <main>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>Something went wrong here.</p>
    </main>
  </NotFoundStyles>
)

export default NotFoundPage
