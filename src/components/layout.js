import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

import favicon from '../../src/images/favicon.png'

import Header from './header'
import GlobalStyles from './styles/globalStyles'
import LayoutStyles from './styles/layoutStyles'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            link={[
              {
                href: withPrefix('/snipcart/snipcart.min.css'),
                rel: 'stylesheet',
                type: 'text/css',
              },
              {
                href: favicon,
                rel: 'shortcut icon',
              },
            ]}
          />
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <LayoutStyles>{children}</LayoutStyles>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
