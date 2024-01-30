import React from 'react';
import Track from '../../components/Track/Track';
import SaveButton from '../../components/SaveButton/SaveButton';
import ActionButton from '../../components/AcctionButton/ActionButton';
import Input from '../../components/Input/Input';

function TracklistContainer(props) {
  return (
    <div>
      <Input/>
      {props.playlist.map((track) => {
        return (
          <div className='track'>
            <div className='trackInfo'>
              <Track artistName={track.artist} albumName={track.album} trackName={track.track} id={track.id} key={track.id}/>
            </div>
            <div className='removeButton'>
              <ActionButton action='➖' handleClick={()=> props.handleRemoveTrack(track)}/>
            </div>
          </div>
        );
      })}
      <SaveButton />
    </div>
  )
};

export default TracklistContainer;