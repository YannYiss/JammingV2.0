import React from 'react';
import Track from '../../components/Track/Track';
import SaveButton from '../../components/SaveButton/SaveButton';
import ActionButton from '../../components/AcctionButton/ActionButton';
import Input from '../../components/Input/Input';
import styles from './TracklistContainer.module.css'

function TracklistContainer({handleRemoveTrack, handleNameInput, playlist, handleSave}) {
  return (
    <div className={styles.container}>
      <Input handleNameInput={handleNameInput}/>
      {playlist.map((track) => {
        return (
          <div className='track'>
            <div className='trackInfo'>
              <Track artistName={track.artists[0].name} albumName={track.album.name} trackName={track.name} uri={track.uri} key={track.uri} img={track.album.images[1].url}/>
            </div>
            <div className='removeButton'>
              <ActionButton action='➖' handleClick={()=> handleRemoveTrack(track)}/>
            </div>
          </div>
        );
      })}
      <SaveButton handleSave={() => handleSave(playlist)} />
    </div>
  )
};

export default TracklistContainer;