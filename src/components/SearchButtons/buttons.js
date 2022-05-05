import React from 'react'
import styles from './SearchButtons.module.css'

function Buttons() {
  return (
    <div className = {styles.container}>
      <button className = {styles.buttons}>Google Search</button>
      <button className = {styles.buttons}>I'm Feeling Lucky</button>
    </div>
  )
}

export default Buttons
