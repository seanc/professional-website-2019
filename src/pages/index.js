import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WelcomeHero from "../components/welcome-hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeHero />
  </Layout>
)

export default IndexPage
