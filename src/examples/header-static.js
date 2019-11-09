import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
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

export default () => {
  return (
    <div>
      <StaticQuery
        query={getData}
        render={({
          site: {
            siteMetadata: { author, description, title },
          },
        }) => {
          return (
            <>
              <p>Static</p>
              <p>Author: {author}</p>
              <p>Description: {description}</p>
              <p>Title: {title}</p>
            </>
          )
        }}
      />
    </div>
  )
}
