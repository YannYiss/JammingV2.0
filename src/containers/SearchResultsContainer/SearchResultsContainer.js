import React from 'react';
import Track from '../../components/Track/Track';
import ActionButton from '../../components/AcctionButton/ActionButton';

function SearchResultsContainer({handleAddTrack, searchResults}) {

  return (
    <div>
      <h1>Search Results</h1>
        {searchResults.map((result) => {
        return (
          <div className='Track'>
            <div className='trackInfo'>
              <Track artistName={result.artists[0].name} albumName={result.album.name} trackName={result.name} uri={result.uri} key={result.uri} img={result.album.images[1].url}/>
            </div>
            <div className='addButton'>
              <ActionButton action='➕' handleClick={() => handleAddTrack(result)}/>
            </div>
          </div>
        );
        })}
    </div>
  )
}

export default SearchResultsContainer;