import React from 'react';
import styles from './GoToButton.module.css';

export default function GoToButton({hide}) {
    return (
        <div className={hide ? '' : styles.hideButton}>
            <a href='#tracklist'><button className={styles.goToButton}>Go to Playlist</button></a>
        </div>
  )
}
