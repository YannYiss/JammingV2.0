import React from 'react';
import SearchButton from '../SearchButton/SearchButton';

function SearchBar({handleSearch}) {
  return (
    <form onSubmit={handleSearch}>
      <input type='text' placeholder='Search' />
      <SearchButton />
    </form>
  )
}

export default SearchBar;