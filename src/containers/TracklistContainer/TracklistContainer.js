import React from 'react';
import Track from '../../components/Track/Track';
import SaveButton from '../../components/SaveButton/SaveButton';

function TracklistContainer() {
  return (
    <div>
      <input type='text' placeholder='Name your playlist here' />
      <Track />
      <Track />
      <Track />
      <SaveButton />
    </div>
  )
};

export default TracklistContainer;