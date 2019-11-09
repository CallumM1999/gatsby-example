import React from "react"
import HeaderHook from "../examples/header-hooks"
import HeaderStatic from "../examples/header-static"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default props => {
  // console.log(props)

  const {
    site: {
      siteMetadata: { author, title, description },
    },
  } = props.data

  return (
    <Layout>
      <h1>Examples page</h1>

      <ul>
        <li>Title: {title}</li>
        <li>Author: {author}</li>
        <li>Description: {description}</li>
      </ul>

      <HeaderHook />
      <HeaderStatic />
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
