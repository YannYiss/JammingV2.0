import React from 'react';
import ActionButton from '../AcctionButton/ActionButton';
import styles from './Track.module.css'

function Track(props) {
  return (
    <div className={styles.track}>
      <div className={styles.trackInfo}>
        <h2>{props.trackName}</h2>
        <h3>{props.artistName}</h3>
        <p>{props.albumName}</p>
      </div>
      <div>
        <img src={props.img} className={styles.album}/>
      </div>
    </div>
  )
};

export default Track;