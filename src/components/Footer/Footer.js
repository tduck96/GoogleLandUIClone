import React from 'react'
import styles from './Footer.module.css'
import leaf from './leaf.png'

const Footer = () => {
  return (
    <div className = {styles.container}>
      <p className = {styles.para}><img src = {leaf} alt = '' className = {styles.leaf}></img> Carbon neutral since 2007</p>
      <div className = {styles.linkCont}>
          <div className ={styles.leftLinks}>
          <a href ='/'>Advertising</a>
          <a href ='/'>Business</a>
          <a href ='/'>How Search works</a>
          </div>
          <div className ={styles.leftLinks}>
          <a href ='/'>Privacy</a>
          <a href ='/'>Terms</a>
          <a href ='/'>Settings</a>
          </div>
      </div>
    </div>
  )
}

export default Footer
