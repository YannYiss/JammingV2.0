import React from 'react';
import styles from './GoToButton.module.css';

export default function GoToButton({goToButtonShow}) {
    return (
        <div className={goToButtonShow ? '' : styles.hideButton}>
            <a href='#tracklist'><button className={styles.goToButton}>Go to Playlist</button></a>
        </div>
  )
}
