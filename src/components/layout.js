import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import GlobalStyles from './styles/globalStyles'
import LayoutStyles from './styles/layoutStyles'

const theme = {
  color: {
    primary: '#333',
    secondary: '#999',
  },
  font: {
    primary: 'Roboto, Helvetica, Arial, sans-serif',
    secondary: 'Roboto Condensed, Helvetica, sans-serif',
  },
}

const Layout = ({ children }) => (
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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <LayoutStyles>{children}</LayoutStyles>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
