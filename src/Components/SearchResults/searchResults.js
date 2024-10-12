import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/TrackList";

function SearchResults(props){
    
    return (
        <section className={styles.SearchResults}>
            <Tracklist userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd}/>
        </section>
    );
}

export default SearchResults;