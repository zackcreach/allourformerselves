import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle, containerHeight }) => {
  const [showMenu, setShowMenu] = useState(false)

  const navRef = useRef()
  const figureRef = useRef()

  const animationDuration = 300

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

    return () => {
      window.removeEventListener('click', handleClick)
      setShowMenu(false)
    }
  }, [])

  const handleClick = event => {
    if (event.target === figureRef.current) {
      setShowMenu(prevMenu => !prevMenu)
    }
    if (
      event.target !== navRef.current &&
      event.target !== figureRef.current &&
      event.target.parentElement !== navRef.current
    ) {
      setShowMenu(prevMenu => (prevMenu ? !prevMenu : prevMenu))
    }
    if (event.target.tagName === 'A') {
      setShowMenu(false)
    }
  }

  return (
    <MenuStyles animationDuration={animationDuration}>
      <figure ref={figureRef} />
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
              {data.allContentfulPage.edges.map(({ node }) => {
                if (node.visibleInMenu) {
                  return (
                    <Link to={node.slug} key={node.title}>
                      {node.title}
                    </Link>
                  )
                }
              })}
            </nav>
          </CSSTransition>
        )}
      </TransitionGroup>
    </MenuStyles>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
  containerHeight: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
