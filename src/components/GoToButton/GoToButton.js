import React from 'react';
import styles from './GoToButton.module.css';

export default function GoToButton() {
    return (
        <div>
            <a href='#tracklist'><button className={styles.goToButton}>Go to Playlist</button></a>
        </div>
  )
}
