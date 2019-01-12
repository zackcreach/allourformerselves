import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import HeaderStyles from './styles/headerStyles'
import logo from '../images/logo--black.svg'

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div className="container">
      <a className="logo-link" href="/">
        <img className="logo" src={logo} alt="All Our Former Selves logo" />
      </a>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
