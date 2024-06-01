import React from 'react';
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import { Spotify } from "../../util/Spotify";

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
          uri: 'spotify:track:1'
        },
        {
          name: 'Example Track Name 2',
          artist: 'Example Track Artist 2',
          album: 'Example Track Album 2',
          id: 2,
          uri: 'spotify:track:2'
        },
      ],
      playlistName: 'Example Playlist',
      playlistTracks: [
        {
          name: 'Example Playlist Track Name',
          artist: 'Example Playlist Track Artist',
          album: 'Example Playlist Track Album',
          id: 3,
          uri: 'spotify:track:3'
        },
        {
          name: 'Example Playlist Track Name 4',
          artist: 'Example Playlist Track Artist 4',
          album: 'Example Playlist Track Album 4',
          id: 4,
          uri: 'spotify:track:4'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find(t => t.id === track.id);
    if (foundTrack) {
      console.log('Track already exists');
    } else {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }

  removeTrack(track) {
    const updatedTracks = this.state.playlistTracks.filter(
      playlistTrack => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: updatedTracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    const name = this.state.playlistName;
    Spotify.savePlaylistName(name, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(term) {
    Spotify.search(term).then(results => {
      this.setState({ searchResults: results });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className='App'>
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} 
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;