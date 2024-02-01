import React from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import SearchBar from '../../components/SearchBar/SearchBar';

function HeaderContainer({login}) {
  return (
    <>
    <SearchBar />
    <ProfileIcon login={login}/>
    </>
  )
}

export default HeaderContainer