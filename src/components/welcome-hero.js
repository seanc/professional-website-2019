import React from 'react'
import '../styles/welcome-hero.scss'

const WelcomeHero = () => {
  return (
    <>
      <div className="hero">
        <div className="container mx-auto h-full">
          <h1 className="font-black text-6xl">Good Night,</h1>
          <h3 className="font-bold text-5xl mt-5">My name's <span className="text-gray-500">Sean</span>.</h3>

          <p className="text-2xl max-w-lg">
            I'm a full-stack web developer with
            {` `}<span className="font-bold text-gray-500 underline">6 years of self-taught experience,</span>
            {` `}and <span>2 years of work experience</span>
            {` `}I'm working on <span className="font-bold text-gray-500 underline">12 projects</span>
          </p>
          <div className="h-20"></div>
        </div>
      </div>
    </>
  )
}

export default WelcomeHero