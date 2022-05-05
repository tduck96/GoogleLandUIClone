import React from 'react'
import styles from './Navbar.module.css'
import logo from './account.svg'
import icon from './settingsicon.png'

const Navbar = () => {
  return (
    <div className = {styles.navbar}>

      <div className = {styles.navbarLeft}>
        <a href = 'gmail.com/about/' className= {styles.about}>About</a>
        <a href = 'gmail.com/store/'>Store</a>

        </div>

        <div className = {styles.navbarRight}>
        <a href ="gmail.com">Gmail</a>
        <a href = 'google.com/images'>Images</a>
        <div className = {styles.settingContainer}>
        <img src= {icon} alt = '' className = {styles.icon}></img>
        </div>
        <a>
        <img className = {styles.logo}  src="https://lh3.googleusercontent.com/ogw/ADea4I6R2cDS_SsG7yvYKCN8VYHLWOjKinpJ7tEwGF5e=s32-c-mo" srcset="https://lh3.googleusercontent.com/ogw/ADea4I6R2cDS_SsG7yvYKCN8VYHLWOjKinpJ7tEwGF5e=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADea4I6R2cDS_SsG7yvYKCN8VYHLWOjKinpJ7tEwGF5e=s64-c-mo 2x " alt="" aria-hidden="true" data-noaft="" data-iml="1651687848329" data-atf="1" data-frt="0" ></img>
        </a>
        </div>
        
      
    </div>
  )
}

export default Navbar
