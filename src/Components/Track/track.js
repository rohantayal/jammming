import React from "react";
import styles from "./Track.module.css";

function Track(props) {

    function renderAction() {

        if (props.isRemoval) {
            return <button className={styles["Track-action"]} onClick={passTrackToRemove}>-</button>
        } else {
            return <button className={styles["Track-action"]} onClick={passTrack}>+</button>
        }
    }

    function passTrack() {
        props.onAdd(props.track);
    }

    function passTrackToRemove(){
        props.onRemove(props.track);
    }

    return (

        <section className={styles.Track}>
            <div className={styles["Track-information"]}>
                {/* <h3><!-- track name will go here --></h3> */}
                <h3>{props.track.name}</h3>
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </section>

    );
}

export default Track;