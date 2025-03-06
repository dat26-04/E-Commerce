import React from 'react'
import styles from "./styles.module.scss"
import Button from '@components/Button/Button'

const Banner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1>Store</h1>
            <div className={styles.title}>Make yours celebrations even more special this years</div>
            <Button content={"Go to shop"}/>
        </div>
    </div>
  )
}

export default Banner