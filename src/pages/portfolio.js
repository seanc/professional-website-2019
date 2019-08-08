import React from 'react'
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';


const PortfolioPage = () => (
    <Layout>
      <SEO title="Portfolio" />
      <Hero>
        <h1>Portfolio</h1>
        <ul className="item-filter">
          <li className="filter"></li>
        </ul>
      </Hero>

      <div className="portfolio">

      </div>
    </Layout>
)

PortfolioPage.propTypes = {}

export default PortfolioPage