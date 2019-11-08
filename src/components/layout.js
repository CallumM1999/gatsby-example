import React from "react"
import Navbar from "./navbar"
import Container from "./container"
import "../scss/layout.scss"

export default ({ children }) => (
  <>
    <Navbar />

    <main>
      <Container>{children}</Container>
    </main>
  </>
)
