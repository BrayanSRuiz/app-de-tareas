import React from 'react'
import styles from './styles/Alert.module.css'

const Alert = ({message}) => {
  return (
    <div className={styles.alert}>
      <span>{message}</span>
    </div>
  )
}

export default Alert

