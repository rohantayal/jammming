import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>

      <div className={styles.App}>

        <div className={styles['App-playlist']}>

        </div>
      </div>


      
    </div>
  );
}

export default App;
