import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = () => (
  <header
    style={{
      background: "cornflowerblue",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        background: "cornflowerblue",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1, color: "white", textAlign: "center"}}>
            Dani Curl
        </h1>
      </div>
    </div>
  </header>
)

export default Header