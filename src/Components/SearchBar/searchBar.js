import React, { useState } from "react";
import styles from './SearchBar.module.css';

function SearchBar(props) {

    const [term, setTerm] = useState("");

    function passTerm() {
        console.log("Term passed to parent:", term); // Debug log
        props.onSearch(term);
    }

    function handleTermChange(event) {
        console.log("Search term input:", event.target.value); // Debug log
        setTerm(event.target.value);
    }

    return (
        <section className={styles.SearchBar}>
            <input type="text" placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}></input>
            <button className={styles.SearchButton} onClick={passTerm}>Search</button>
        </section>
    );
}

export default SearchBar;
