/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"



const Layout = ({ children }) => {
  return (
    <div id="realtop">
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}
export default Layout
