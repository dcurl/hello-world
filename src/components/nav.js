import React from "react"
import { Link } from "gatsby"
import {
  containerNav,
  navNavbox,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Nav = () => (
   <div classname={containerNav}>
            <nav className={navNavbox}>
             <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                    Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                     <Link to="/about" className={navLinkText}>
                    About
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
)

export default Nav