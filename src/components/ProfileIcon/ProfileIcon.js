import React from 'react';
import styles from './ProfileIcon.module.css';

function ProfileIcon({login, profile}) {
  if(profile) {
    return (
      <div>
        <p>Hello, {profile.display_name}</p>
        <img src={profile.images[0].url} alt={profile.display_name}/>
      </div>
    );
  }
  return (
    <div>
      <button className={styles.loginButton} onClick={login}>Login</button>
    </div>
  )
}

export default ProfileIcon