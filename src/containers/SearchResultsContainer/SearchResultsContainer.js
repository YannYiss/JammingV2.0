import React from 'react';
import Track from '../../components/Track/Track';
import ActionButton from '../../components/AcctionButton/ActionButton';

function SearchResultsContainer(props) {

  return (
    <div>
      <h1>Search Results</h1>
      {props.searchResults.map((result) => {
       return (
        <div className='Track'>
          <div className='trackInfo'>
            <Track artistName={result.artist} albumName={result.album} trackName={result.track} id={result.id} key={result.id}/>
          </div>
          <div className='addButton'>
            <ActionButton action='➕' handleClick={() => props.handleAddTrack(result)}/>
          </div>
        </div>
       );
      })}
    </div>
  )
}

export default SearchResultsContainer;