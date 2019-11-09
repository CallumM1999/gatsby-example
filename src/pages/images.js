import React from "react"
import Layout from "../components/layout"
import Images from "../examples/images"

export default props => {
  //   console.log(props)
  return (
    <Layout>
      <Images />
    </Layout>
  )
}

export const getData = graphql`
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
