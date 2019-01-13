import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'

import HeaderStyles from './styles/headerStyles'
import Menu from './menu'
import logo from '../images/logo--black.svg'

const Header = ({ siteTitle }) => {
  const [containerHeight, setContainerHeight] = useState('')
  const containerRef = useRef()

  useEffect(
    () => {
      setContainerHeight(`${containerRef.current.offsetHeight - 1}px`)
    },
    // Only update if the value changes
    [containerRef.current]
  )

  return (
    <HeaderStyles>
      <div className="container" ref={containerRef}>
        <Menu containerHeight={containerHeight} />
        <a className="logo-link" href="/">
          <img className="logo" src={logo} alt="All Our Former Selves logo" />
        </a>
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
