import React, { useState } from 'react';
import styles from  "../stylesheet/home.module.css";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Display from '../components/Display';

const Home = ({children}) => {

  return (
    <div className={styles.home}>
      {children} 
    </div>

  )
}

export default Home;