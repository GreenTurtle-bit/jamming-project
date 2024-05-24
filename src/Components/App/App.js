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
      playlistTracks: [
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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find((t) => t.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);
    if (foundTrack) {
      console.log('Track already existed')
    } else {
      this.setState({playlistTracks: newTrack});
    }

  }

  removeTrack(track) {
    const isPresent = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: isPresent });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
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
            <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack} />

            {/*  */}
            <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
