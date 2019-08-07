import React from 'react'
import '../styles/hero.scss'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container mx-auto">
          <h1 className="font-black text-6xl">Good Night,</h1>
          <h3 className="font-bold text-4xl mt-5">My name's <span className="text-gray-500">Sean</span>.</h3>

          <p className="text-2xl max-w-md">
            I'm a full-stack web developer with <span className="font-bold text-gray-500 underline">6 years of work experience.</span>
            {` `}I'm working on <span className="font-bold text-gray-500 underline">12 projects</span>
          </p>
        </div>
      </div>
    </>
  )
}

Hero.defaultProps = {

}

export default Hero;