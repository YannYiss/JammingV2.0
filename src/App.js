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
      uri: 'sdavfdklndlgsdf65465a4sc6ds4f'
    }, 
    {
      artist: 'Muse',
      album: 'Anthology',
      track: 'Map of the problematic',
      uri: '65a4cs6d5fv41s658v4d3a2c1as35d46f5s43v'
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

  const handleSave = (playlist) => {
    if(playlist.length == 0) {
      alert('Please add at least 1 song to create a new playlist');
    } else if(playlistName === '') {
      alert('Please name your playlist');
    } else {
      const tracksUri = [];
      playlist.map((track) => {
        tracksUri.push(track.uri);
      });
      console.log(tracksUri);
      console.log(playlistName);
    }
  };
  
  return (
    <div className="App">
      <HeaderContainer />
      <SearchResultsContainer searchResults={searchResults} handleAddTrack={handleAddTrack}/>
      <TracklistContainer handleSave={handleSave} handleNameInput={handleNameInput} playlist={playlist} handleRemoveTrack={handleRemoveTrack}/>
    </div>
  );
}

export default App;
