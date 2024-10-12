import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../TrackList/TrackList';

function Playlist(props){
    function handleNameChange(e){
        props.onNameChange(e.target.value);
    }


    return (
        <section className={styles.Playlist}>

            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <Tracklist userSearchResults={props.playListTracks} onRemove={props.onRemove} isRemoval={true} />
            <button className={styles["Playlist-save"]} onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </section>
    );
}

export default Playlist;