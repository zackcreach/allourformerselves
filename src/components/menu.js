import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const links = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }]

  const mainRef = useRef()
  const figureRef = useRef()

  useEffect(() => {
    window.addEventListener('click', handleClick)
  }, [])

  const handleClick = event => {
    if (event.target === figureRef.current) {
      setShowMenu(!showMenu)
    }
    if (
      event.target !== mainRef.current &&
      event.target !== figureRef.current &&
      event.target.parentElement !== mainRef.current
    ) {
      setShowMenu(false)
    }
  }

  return (
    <MenuStyles>
      <figure ref={figureRef} />
      <div className={showMenu ? 'mask mask--active' : 'mask mask--inactive'} />
      {showMenu && (
        <main ref={mainRef}>
          {links.map((node, index) => (
            <Link to={node.link} key={node.name}>
              {node.name}
            </Link>
          ))}
        </main>
      )}
    </MenuStyles>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
