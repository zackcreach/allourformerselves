import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import HeaderStyles from './styles/headerStyles'

const Footer = ({ siteTitle }) => (
  <FooterStyles>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </FooterStyles>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
