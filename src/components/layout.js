import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { get } from 'lodash-es'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

import Header from './header'
import Footer from './footer'
import GlobalStyles from './styles/globalStyles'
import LayoutStyles from './styles/layoutStyles'

const Layout = ({ children }) => {
  const headerRef = useRef()
  const footerRef = useRef()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty(
      '--header-height',
      `${headerRef.current.offsetHeight}px`
    )
    root.style.setProperty(
      '--footer-height',
      `${footerRef.current.offsetHeight}px`
    )
  }, [
    get(headerRef, 'current.offsetHeight'),
    get(footerRef, 'current.offsetHeight'),
  ])

  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        link={[
          {
            href: withPrefix('/snipcart/snipcart.min.css'),
            rel: 'preload',
            as: 'style',
          },
          {
            href: withPrefix('/snipcart/snipcart.min.css'),
            rel: 'stylesheet',
            type: 'text/css',
          },
          {
            href: withPrefix('/images/favicon.png'),
            rel: 'shortcut icon',
          },
          {
            href: withPrefix('/images/favicon-apple.png'),
            sizes: '180x180',
            rel: 'apple-touch-icon',
          },
        ]}
      />
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} headerRef={headerRef} />
      <LayoutStyles>{children}</LayoutStyles>
      <Footer footerRef={footerRef} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
