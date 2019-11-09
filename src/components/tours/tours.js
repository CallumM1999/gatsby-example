import React from "react"
import Tour from "./tour"
import styles from "./items.module.css"

export default ({ tours }) => {
  //   console.table(tours)
  return (
    <section className={styles.tours}>
      <h2>Our Tours</h2>
      <div className={styles.center}>{}</div>
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </section>
  )
}
