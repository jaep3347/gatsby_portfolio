import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import About from "../components/about"
import Develop from "../components/Develop"
import Footer from "../components/Footer"
import Design from "../components/Design"


const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Header></Header>
    <About></About>
    <Design></Design>
    <Develop></Develop>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
