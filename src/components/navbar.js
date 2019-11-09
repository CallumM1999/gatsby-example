import React from "react"
import { Link } from "gatsby"
// import styles from "../scss/navbar.module.scss"

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/products/">Products</Link>
      </li>
      <li>
        <Link to="/examples/">Examples</Link>
      </li>
      <li>
        <Link to="/tours/">Tours</Link>
      </li>
    </ul>
  </nav>
)
