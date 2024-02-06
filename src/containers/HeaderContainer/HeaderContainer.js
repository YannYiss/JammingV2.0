import React, { useEffect, useState } from 'react';
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import SearchBar from '../../components/SearchBar/SearchBar';
import Spotify from '../../utils/Spotify';

function HeaderContainer({handleSearch, handleLogin}) {
  const [userProfile, setUserProfile] = useState('');
  
  const login = async (e) => {
    e.preventDefault();
    Spotify.getAccessToken();
  }
  
  const getProfile = async () => {
      const token = await Spotify.getAccessToken()
      const profile = await Spotify.getUserProfile(token);
      setUserProfile(profile);
      handleLogin(profile);
    };

  useEffect(()=> {
    const isLoggedIn = window.location.href.match(/access_token=([^&]*)/);
    if(isLoggedIn) {
      getProfile()
    }
  }, [])

  return (
    <>
    <SearchBar handleSearch={handleSearch}/>
    <ProfileIcon login={login} profile={userProfile}/>
    </>
  )
}

export default HeaderContainer;