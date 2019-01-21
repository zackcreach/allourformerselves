import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useRef, useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import MenuStyles from './styles/menuStyles'

const Menu = ({ siteTitle, containerHeight }) => {
  const [showMenu, setShowMenu] = useState(false)
  const links = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }]

  const mainRef = useRef()
  const figureRef = useRef()

  const animationDuration = 300

  useEffect(() => {
    window.addEventListener('click', handleClick)
    // [] second argument is equivalent to ComponentDidMount (only fires once)
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
    <MenuStyles
      containerHeight={containerHeight}
      animationDuration={animationDuration}
    >
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
            <main ref={mainRef}>
              {links.map(node => (
                <Link to={node.link} key={node.name}>
                  {node.name}
                </Link>
              ))}
            </main>
          </CSSTransition>
        )}
      </TransitionGroup>
    </MenuStyles>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
  containerRef: PropTypes.object,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
