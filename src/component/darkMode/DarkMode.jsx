"use client"
import React, { useContext } from 'react'
import styles from "./Darkmode.module.css"
import { ThemeContext } from '@/context/ThemeContext';
import { useStore } from 'zustand';
const DarkMode = () => {
  
  const {mode,toggle}=useContext(ThemeContext);
    // console.log(mode)
  return (
   
    <div className={styles.container} onClick={toggle}>
      
        <div className={styles.icon}>🌞</div>  <div className={styles.icon}>🌙</div>
        <div className={styles.ball}
        style={mode==="light"?{left:"4px"}:{right:"5px"}}
        ></div>
    </div>
  )
}

export default DarkMode
