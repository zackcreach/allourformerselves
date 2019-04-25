import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'
import { get } from 'lodash-es'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)

  const navRef = useRef()
  const menuRef = useRef()

  const animationDuration = 450

  const data = useStaticQuery(graphql`
    query MenuQuery {
      allContentfulPage(sort: { fields: [order, title], order: [ASC, ASC] }) {
        edges {
          node {
            title
            slug
            visibleInMenu
          }
        }
      }
    }
  `)

  useEffect(() => {
    window.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('keydown', handleKeydown)
      setShowMenu(false)
    }
  }, [])

  const handleClick = event => {
    if (event.target === menuRef.current) {
      setShowMenu(prevMenu => !prevMenu)
    }
    if (
      event.target !== navRef.current &&
      event.target !== menuRef.current &&
      event.target.parentElement !== navRef.current
    ) {
      setShowMenu(prevMenu => (prevMenu ? !prevMenu : prevMenu))
    }
    if (event.target.tagName === 'A') {
      setShowMenu(false)
    }
  }

  const handleKeydown = event => {
    if (get(event, 'keyCode', 0) === 27) {
      setShowMenu(false)
    }
  }

  return (
    <MenuStyles animationDuration={animationDuration} showMenu={showMenu}>
      <button className="menu" ref={menuRef} type="button" tabIndex="0">
        <div className="menu__middle" />
      </button>
      <TransitionGroup>
        {showMenu && (
          <CSSTransition
            className="mask"
            classNames="mask"
            timeout={{ enter: animationDuration, exit: animationDuration }}
          >
            <div className="mask__content" />
          </CSSTransition>
        )}
        {showMenu && (
          <CSSTransition
            className="slide-right"
            classNames="slide-right"
            timeout={{ enter: animationDuration, exit: animationDuration }}
          >
            <nav ref={navRef}>
              <Link to="/">Shop</Link>
              {data.allContentfulPage.edges.map(({ node }) => {
                if (node.visibleInMenu) {
                  return (
                    <Link to={`/${node.slug}`} key={node.title}>
                      {node.title}
                    </Link>
                  )
                }
                return null
              })}
            </nav>
          </CSSTransition>
        )}
      </TransitionGroup>
    </MenuStyles>
  )
}

Menu.propTypes = {}

Menu.defaultProps = {}

export default Menu
