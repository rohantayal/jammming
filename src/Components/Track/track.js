import React from "react";

function Track(props) {
    return (
        <>
            <div>
                <h3>{props.Track.title}hi</h3>
                <p>{props.Track.artist} | {props.Track.album}</p>
            </div>
        </>
    )
}

export default Track;