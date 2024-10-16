import React, { useState } from 'react';
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlists/Playlist";
import SearchBar from '../SearchBar/SearchBar';
import spotify from "../../util/Spotify/Spotify";

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      name: "Example tract name 1",
      artist: "Example tract artist 1",
      album: "Example tract album 1",
      id: "1",
    },
    {
      name: "Example tract name 2",
      artist: "Example tract artist 2",
      album: "Example tract album 2",
      id: "2,"
    },

  ]);

  const [playListName, setPlayListName] = useState("New Playlist Example 1");
  const [playListTracks, setPlayListTracks] = useState([
    {
      name: "Example PlayListTrack name 1",
      artist: "Example PlayListTrack artist 1",
      album: "Example PlayListTrack album 1",
      id: "1",
    },
    {
      name: "Example PlayListTrack name 2",
      artist: "Example PlayListTrack artist 2",
      album: "Example PlayListTrack album 2",
      id: "2,"
    },

  ]);

  function addTrack(track) {
    const existingTrack = playListTracks.find(t => t.id === track.id);
    const newPlayList = playListTracks.concat(track);

    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlayListTracks(newPlayList);
    }
  }

  function removeTrack(track) {
    const newPlayList = playListTracks.filter(t => t.id !== track.id);
    setPlayListTracks(newPlayList);
  }

  function updatePlaylistName(name) {
    setPlayListName(name);
  }

  function savePlaylist() {
    const trackUris = playListTracks.map(t => t.uri);
    spotify.savePlaylist(playListName, trackUris).then(()=>{
      setPlayListName("New Playlist")
      setPlayListTracks([])
    });
  }
  
  function search(term) {
    console.log("Searching for term:", term); // Log the term received
    spotify.search(term).then(result => {
      console.log("Search results:", result); // Log the results received
      setSearchResults(result);
    });
  }




  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>

      <div className={styles.App}>

        <SearchBar onSearch={search} />

        <div className={styles['App-playlist']}>

          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />

          <Playlist playListName={playListName} playListTracks={playListTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />

        </div>
      </div>



    </div>
  );
}

export default App;
