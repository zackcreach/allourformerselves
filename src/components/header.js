import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'

import HeaderStyles from './styles/headerStyles'
import Menu from './menu'
import logo from '../images/logo--black.svg'

const Header = ({ siteTitle, containerRef, containerHeight }) => {
  const [headerFixed, setHeaderFixed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 1) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  }

  return (
    <HeaderStyles headerFixed={headerFixed}>
      <div className="container" ref={containerRef}>
        <Menu containerHeight={containerHeight} />
        <Link className="logo-link" to="/">
          <img className="logo" src={logo} alt="All Our Former Selves logo" />
        </Link>
      </div>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
