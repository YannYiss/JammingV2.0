import styles from './SearchButton.module.css'
import React from 'react'

function SearchButton() {
  return (
    <button type='submit' className={styles.searchButton}>🔍</button>
  )
}

export default SearchButton;