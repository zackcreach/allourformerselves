import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle }) => <MenuStyles />

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
