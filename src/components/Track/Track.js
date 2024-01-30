import React from 'react';
import ActionButton from '../AcctionButton/ActionButton';

function Track(props) {
  return (
    <div>
      <h2>{props.trackName}</h2>
      <h3>{props.artistName}</h3>
      <p>{props.albumName}</p>
      <img />
    </div>
  )
};

export default Track;