import React from 'react';
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Example Track Name',
          artist: 'Example Track Artist',
          album: 'Example Track Album',
          id: 1,
        },
        {
          name: 'Example Track Name 2',
          artist: 'Example Track Artist 2',
          album: 'Example Track Album 2',
          id: 2,
        },
        
      ],
      playlistName: 'Example PLaylist',
      playlistTrack: [
        {
          name: 'Example PLaylist Track Name',
          artist: 'Example PLaylist Track Artist',
          album: 'Example PLaylist Track Album',
          id: 3,
        },
        {
          name: 'Example PLaylist Track Name 4',
          artist: 'Example PLaylist Track Artist 4',
          album: 'Example PLaylist Track Album 4',
          id: 4,
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          {/*  */}
          <SearchBar />
          <div className='App-playlist'>
            {/*  */}
            <SearchResults searchResults={this.state.searchResults}/>

            {/*  */}
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTrack={this.state.playlistTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
