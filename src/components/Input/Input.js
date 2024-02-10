import React from 'react';
import styles from './Input.module.css';

function Input({handleNameInput}) {
  return (
    <input className={styles.input} onChange={handleNameInput} type='text' placeholder='Name you playlist here ✏️'/>
  )
}

export default Input