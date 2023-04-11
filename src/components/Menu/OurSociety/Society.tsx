import React from 'react'
import styles from './Society.module.css'
import {HiStar, HiHeart,HiUserGroup } from "react-icons/hi";
const Society = () => {

let interval = 5000;




  return (
    
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.iconCounter}><HiUserGroup/> </div> 
          <span className={styles.num} data-val="400">000</span>
          <span className={styles.text}>Nasi użytkownicy</span>
        </div>
        <div className={styles.container}>
        <div className={styles.iconCounter}><HiHeart />  </div> 
          <span className={styles.num} data-val="400">000</span>
          <span className={styles.text}>Wkładamy w naszą pracę całe serce</span>
        </div>
        <div className={styles.container}>
       <div className={styles.iconCounter}> <HiStar /></div> 
          <span className={styles.num} data-val="400">000</span>
          <span className={styles.text}>Jesteśmy oceniani na 5 gwiazdek</span>
        </div>
      </div>
   
  )
}

export default Society
