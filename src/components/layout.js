import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Nav from "./Nav"
import {
    container,
    containerBodyleft,
    containerBodyright,
    heading,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
     <Header/>
     <Nav/>

        <h1 className={heading}>{pageTitle}</h1>
        
        <div className={containerBodyleft}>
            <main>
                    {children}
            </main>
        </div>
        <div className={containerBodyright}>
            Test
        </div>
    </div>
  )
}
export default Layout