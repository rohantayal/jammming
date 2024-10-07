import React from 'react';
import styles from './Playlist.module.css';

function Playlist(){

    return (
        <section className="Playlist">

            <input defaultValue={"New Playlist"}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </section>
    );
}

export default Playlist;