import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import FooterStyles from './styles/footerStyles'

import logo from '../images/logo--white.png'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allContentfulPage(sort: { fields: [order, title], order: [ASC, ASC] }) {
        edges {
          node {
            title
            slug
            visibleInFooter
          }
        }
      }
    }
  `)

  return (
    <FooterStyles>
      <div className="container">
        <Link className="logo-link" to="/">
          <img className="logo" src={logo} alt="All Our Former Selves logo" />
        </Link>
        <nav>
          {data.allContentfulPage.edges.map(({ node }) => {
            if (node.visibleInFooter) {
              return (
                <Link to={node.slug} key={node.title}>
                  {node.title}
                </Link>
              )
            }
            return null
          })}
        </nav>
      </div>
      <div className="bottom">
        <div className="columns">
          <div className="copywrite">© 2019 Former Selves</div>
          <div className="social">
            <a
              href="https://www.instagram.com/former_selves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
