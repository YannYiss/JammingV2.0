import styles from './SearchBar.module.css'
import React from 'react';
import SearchButton from '../SearchButton/SearchButton';

function SearchBar({handleSearch}) {
  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input className={styles.input} type='text' placeholder='Search by track name' />
      <SearchButton />
    </form>
  )
}

export default SearchBar;