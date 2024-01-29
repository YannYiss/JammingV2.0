import React from 'react';
import SearchButton from '../SearchButton/SearchButton';

function SearchBar() {
  return (
    <form>
      <input type='text' placeholder='Search' />
      <SearchButton />
    </form>
  )
}

export default SearchBar;