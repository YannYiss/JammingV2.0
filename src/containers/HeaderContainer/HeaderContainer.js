import React from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import SearchBar from '../../components/SearchBar/SearchBar';

function HeaderContainer({login, handleSearch}) {
  return (
    <>
    <SearchBar handleSearch={handleSearch}/>
    <ProfileIcon login={login}/>
    </>
  )
}

export default HeaderContainer