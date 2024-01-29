import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer/HeaderContainer';
import SearchResultsContainer from './containers/SearchResultsContainer/SearchResultsContainer';
import TracklistContainer from './containers/TracklistContainer/TracklistContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <SearchResultsContainer />
      <TracklistContainer />
    </div>
  );
}

export default App;
