import React from 'react';
import styles from './ActionButton.module.css';

function ActionButton({action, handleClick}) {
  return (
    <button className={styles.actionButton} onClick={handleClick}>{action}</button>
  )
}

export default ActionButton;