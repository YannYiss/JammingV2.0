import React from 'react';
import styles from './SaveButton.module.css';

function SaveButton({handleSave}) {
  return (
    <button className={styles.saveButton} onClick={handleSave}>Save Playlist</button>
  )
}

export default SaveButton