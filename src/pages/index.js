import React from "react"
import Layout from "../components/layout"
import { Button } from "../components/button"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>

    <p>Lead paragraph</p>

    <Button>Hello</Button>
  </Layout>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
