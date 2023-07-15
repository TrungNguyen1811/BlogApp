import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus quo voluptatum.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>YouTube: BlogYoutube</span>
          <span>Facebook: BlogsFB</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Viet Nam</span>
          <span>Country: Da Nang</span>
          <span>Current Location: Fpt University</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer