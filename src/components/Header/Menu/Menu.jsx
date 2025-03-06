import React from 'react'
import styles from "../styles.module.scss"
const Menu = ({content, href}) => {
  return (
    <div className={styles.menu}>
      {content}</div>
  )
}

export default Menu