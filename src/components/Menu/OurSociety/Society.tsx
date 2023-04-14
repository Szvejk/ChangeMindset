import React from 'react'
import styles from './Society.module.css'
import {HiStar, HiHeart,HiUserGroup } from "react-icons/hi";
import {CountAnimation} from '../../Count/CountAnimation'

const boxes=[{
  id: 1,
  icon: <HiUserGroup/>,
  endCount: 100,
  text: "Nasi użytkownicy"
},{
  id: 2,
  icon: <HiHeart /> ,
  endCount: 200,
  text: "Wkładamy w naszą pracę całe serce"
},{
  id: 3,
  icon:  <HiStar />,
  endCount: 300,
  text: "Jesteśmy oceniani na 5 gwiazdek"
}]

const Society = () => {

let interval = 5000;




  return (
      <div className={styles.wrapper}>
        {boxes.map(el=>{
          return <div key={el.id}>
            <div className={styles.container}>
        <div className={styles.iconCounter}>{el.icon} </div>
         <CountAnimation duration={3000} endCount={el.endCount} /> 
          <span className={styles.text}>{el.text}</span>
        </div>
          </div>
        })}

        {/* <div className={styles.container}>
        <div className={styles.iconCounter}><HiUserGroup/> </div>
         <CountAnimation duration={3000} endCount={400} /> 
          <span className={styles.text}>Nasi użytkownicy</span>
        </div>
        <div className={styles.container}>
        <div className={styles.iconCounter}><HiHeart />  </div> 
        <CountAnimation duration={3000} endCount={200} /> 
          <span className={styles.text}>Wkładamy w naszą pracę całe serce</span>
        </div>
        <div className={styles.container}>
       <div className={styles.iconCounter}> <HiStar /></div> 
       <CountAnimation duration={3000} endCount={100} /> 
          <span className={styles.text}>Jesteśmy oceniani na 5 gwiazdek</span>
        </div> */}
      </div>
   
  )
}

export default Society
