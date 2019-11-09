import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query firstQuery {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { author, description, title: yeet },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Author: {author}</h1>
      <h1>Title: {yeet}</h1>
      <h1>Description: {description}</h1>
    </div>
  )
}
