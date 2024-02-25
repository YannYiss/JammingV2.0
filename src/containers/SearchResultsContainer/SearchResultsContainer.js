import React from 'react';
import Track from '../../components/Track/Track';
import ActionButton from '../../components/AcctionButton/ActionButton';
import styles from './SearchResultsContainer.module.css'

function SearchResultsContainer({handleAddTrack, searchResults}) {
  let hide = true;

  if(searchResults.length > 0) {
    hide = false
  }

  return (
    <div className={hide ? styles.hide : styles.container}>
      <h1 className={styles.h1}>Search Results</h1>
        {searchResults.map((result) => {
        return (
          <div className={styles.track}>
            <div className={styles.trackInfo}>
              <Track artistName={result.artists[0].name} albumName={result.album.name} trackName={result.name} uri={result.uri} key={result.uri} img={result.album.images[1].url}/>
            </div>
            <div className={styles.addButton}>
              <ActionButton action='+' handleClick={() => handleAddTrack(result)}/>
            </div>
          </div>
        );
        })}
    </div>
  )
}

export default SearchResultsContainer;