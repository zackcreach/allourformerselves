import React, { useRef, useState, useEffect } from 'react'
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
  width: {
    small: '400px',
    medium: '800px',
    large: '1200px',
  },
}

const Layout = ({ children }) => {
  const [containerHeight, setContainerHeight] = useState('')
  const containerRef = useRef()

  useEffect(() => {
    setContainerHeight(`${containerRef.current.offsetHeight - 1}px`)
  }, [containerRef.current])

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
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Header
              containerRef={containerRef}
              containerHeight={containerHeight}
              siteTitle={data.site.siteMetadata.title}
            />
            <LayoutStyles containerHeight={containerHeight}>
              {children}
            </LayoutStyles>
          </>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
