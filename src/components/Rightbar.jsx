import React, { useEffect } from 'react'
import styles from "../stylesheet/rightbar.module.css"

const Rightbar = () => {

    

    return (
        <div>
            <a id={`${styles.menuToggle}`} href="#" className={`btn btn-primary btn-lg toggle ${styles.toggle}`}><i className={`glyphicon glyphicon-bookmark`}></i></a>
            
        </div>
    )
}

export default Rightbar