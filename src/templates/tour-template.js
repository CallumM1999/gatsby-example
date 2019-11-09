import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      journey {
        day
      }
    }
  }
`

export default ({ pageContext, data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    images,
    journey,
  } = data.tour
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => (
              <Image
                key={index}
                fluid={item.fluid}
                alt={name}
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> starting from ${price}
            </p>
            <p>
              <FaMap clasName={styles.icon} /> {country}
            </p>
          </div>
          <h4>Starts on : {start}</h4>
          <h4>Duration on : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>Daily Schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => (
              <li key={index}>{item.day}</li>
            ))}
          </ul>
          <Link to="/tours/">Back to Tours</Link>
        </div>
      </section>
    </Layout>
  )
}
