import React from 'react'
import styles from "../stylesheet/display.module.css"
import Welcome from './Welcome'
import Card from './Card'
import Films from '../pages/Films'


const Display = ({data}) => {
  return (
    <div className={styles.display}>
        {/* <Welcome/> */}
        <Films data={data}/>
    </div>
  )
}

export default Display