import React, {useState} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import SearchResultsContainer from './containers/SearchResultsContainer/SearchResultsContainer';
import TracklistContainer from './containers/TracklistContainer/TracklistContainer';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      artist: 'Limp Bizkit',
      album: 'One Dolar Bill',
      track: 'Something',
      id: 'sdavfdklndlgsdf65465a4sc6ds4f'
    }, 
    {
      artist: 'Muse',
      album: 'Anthology',
      track: 'Map of the problematic',
      id: '65a4cs6d5fv41s658v4d3a2c1as35d46f5s43v'
    }
    ]);

  const [playlistName, setPlaylistName] = useState('');

  const handleNameInput = ({target}) => {
    setPlaylistName(target.value);
  };

  const [playlist, setPlaylist] = useState([]);

  const handleAddTrack = (track) => {
    setPlaylist((prev) => [track, ...prev]);
    setSearchResults(searchResults.filter((resultsTrack) => track !== resultsTrack));
  }

  const handleRemoveTrack = (track) => {
    const newArray = playlist.filter((trackInPlaylist) => track !== trackInPlaylist)
    setPlaylist(newArray)
    setSearchResults((prev) => [track, ...prev]);
  }
  
  return (
    <div className="App">
      <HeaderContainer />
      <SearchResultsContainer searchResults={searchResults} handleAddTrack={handleAddTrack}/>
      <TracklistContainer handleNameInput={handleNameInput} playlist={playlist} handleRemoveTrack={handleRemoveTrack}/>
    </div>
  );
}

export default App;
