import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import HeaderStyles from './styles/headerStyles'

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
