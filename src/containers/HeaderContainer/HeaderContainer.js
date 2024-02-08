import styles from './HeaderContainer.module.css'
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
    <div className={styles.searchBar}>
      <SearchBar handleSearch={handleSearch}/>
    </div>
    <div className={styles.profileIcon}>
      <ProfileIcon login={login} profile={userProfile}/>
    </div>
    </>
  )
}

export default HeaderContainer;