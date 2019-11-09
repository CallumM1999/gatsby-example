import React from "react"
import Layout from "../components/layout"
import Tours from "../components/tours/tours"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <p>Tours page</p>

    <Tours tours={data.tours.nodes} />
  </Layout>
)

export const getTours = graphql`
  {
    tours: allContentfulTour {
      nodes {
        name
        price
        slug
        country
        id: contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
