import React from 'react'
import Header from './google.png'
import styles from'./Google.module.css'

function Google() {
  return (
    <div className = {styles.header}>
     <img src = {Header} className = {styles.img} alt = ''></img>
    </div>
  )
}

export default Google
