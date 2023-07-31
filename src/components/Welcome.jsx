import React from 'react'
import styles from "../stylesheet/welcome.module.css"

const Welcome = () => {
  return (
    <div className={styles.welcome}>
        <img src='./welcome.png'></img>
        <div>
        <h1>Welcome to Star Wars </h1>
        <h1>Dashboard</h1>
        </div>
        
        <div>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</div>
    </div>
  )
}

export default Welcome;