import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.css'

function Header () {
  return (
    <header className={styles.root}>
      <Link to='/'>
        <h1 className={styles.logo}>Reacttr</h1>
      </Link>
    </header>
  )
}

export default Header
