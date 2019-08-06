import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="navbar">
      <div className="navbar-brand">
        <div className="brand-sticky-logo">
          <img src="" alt=""/>
        </div>
        <Link className="brand-link">
          Sean C. Wilson
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="menu-item">
          <a href="#" className="menu-link">Portfolio</a>
          <a href="#" className="menu-link">About Me</a>
          <a href="#" className="menu-link"></a>
        </li>
      </ul>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }} 
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
