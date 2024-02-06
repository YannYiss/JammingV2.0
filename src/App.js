import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import SearchResultsContainer from './containers/SearchResultsContainer/SearchResultsContainer';
import TracklistContainer from './containers/TracklistContainer/TracklistContainer';
import Spotify from '../src/utils/Spotify';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (userProfile) => {
    if(userProfile) {
      setLoggedIn(true);
    };
  };

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!loggedIn) {
      return alert('Please log in');
    }
    if(!e.target[0].value) {
      return alert('Please type in the track you would like to search for');
    }
    const token = await Spotify.getAccessToken()
    const res = await Spotify.searchTracks(e, token);
    console.log(res)
    setSearchResults(res);
  }

  const [playlistName, setPlaylistName] = useState('');

  const handleNameInput = ({target}) => {
    setPlaylistName(target.value);
  };

  const [playlist, setPlaylist] = useState([]);

  const handleAddTrack = (track) => {
    console.log(track)
    setPlaylist((prev) => [track, ...prev]);
    setSearchResults(searchResults.filter((resultsTrack) => track !== resultsTrack));
  }

  const handleRemoveTrack = (track) => {
    const newArray = playlist.filter((trackInPlaylist) => track !== trackInPlaylist)
    setPlaylist(newArray)
    setSearchResults((prev) => [track, ...prev]);
  }

  const handleSave = (playlist) => {
    if(playlist.length === 0) {
      return alert('Please add at least 1 song to create a new playlist');
    } else if(playlistName === '') {
      return alert('Please name your playlist');
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
      <HeaderContainer handleSearch={handleSearch} handleLogin={handleLogin}/>
      <SearchResultsContainer searchResults={searchResults} handleAddTrack={handleAddTrack}/>
      <TracklistContainer handleSave={handleSave} handleNameInput={handleNameInput} playlist={playlist} handleRemoveTrack={handleRemoveTrack}/>
    </div>
  );
}

export default App;
