import React from 'react'
import styles from './Cart.module.scss'

function Card({ children, cardClass }) {
  return (
    <div className={`${styles.card} ${cardClass}`}>
      {children}
    </div>
  )
}

export default Card

