import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/navbar.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <div className="container mx-auto h-full">
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
            <Link to="/portfolio" className="menu-link">Portfolio</Link>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">About Me</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Contact Me</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Request Resume</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <div
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
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
