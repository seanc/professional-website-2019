import React from 'react'
import PropTypes from 'prop-types'

const Hero = (children) => (
  <>
    <div className="hero">
      <div className="container">
        {children}
      </div>
    </div>
  </>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired
}

export default Hero