import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [links, setLinks] = useState([
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
  ])
  return (
    <MenuStyles>
      <figure className="hamburger" onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <main>
          {links.map((node, index) => (
            <Link to={node.link}>{node.name}</Link>
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
