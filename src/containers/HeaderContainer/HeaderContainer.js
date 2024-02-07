import React, { useEffect, useState } from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spotify from '../../utils/Spotify';

function HeaderContainer({handleSearch, userProfile}) {
  
  const login = async (e) => {
    e.preventDefault();
    Spotify.getAccessToken();
  }

  return (
    <>
    <SearchBar handleSearch={handleSearch}/>
    <ProfileIcon login={login} profile={userProfile}/>
    </>
  )
}

export default HeaderContainer;