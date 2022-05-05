import React from 'react'
import styles from './Search.module.css'
import search from './searchicon.png'
import microphone from './microphoneicon.png'

function Search() {
  return (
    <div className = {styles.searchContainer}>
      <div className = {styles.inputContainer} >
        <img src = {search} alt = '' className = {styles.searchPic}></img>
      <input type = 'text' className = {styles.input} className ={styles.input}></input>
      <img src = {microphone} alt = '' className = {styles.mic}></img>
      </div>
    </div>
  )
}

export default Search

