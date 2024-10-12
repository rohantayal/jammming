import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <section className={styles.TrackList}>
            {props.userSearchResults.map((track) => {
                console.log(track);  // Add this line to log each track
                return (
                    <Track track={track} key={track.id} isRemoval={props.isRemoval} onAdd={props.onAdd} onRemove={props.onRemove}/>
                );
            })}
        </section>
    );
}

export default Tracklist;
