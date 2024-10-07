import React from "react";
import styles from './SearchBar.module.css';

function SearchBar(){

    return (
        <section className="SearchBar">
            
            <input type="text" placeholder="Enter A Song, Album, or Artist"></input>
            <button className="SearchButton">Search</button>

        </section>
    );
}

export default SearchBar;