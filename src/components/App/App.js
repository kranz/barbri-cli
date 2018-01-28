import React, { Component } from 'react';
import logo from './logo.svg';
// import { AppComp, AppHeader, AppLogo, AppTitle, AppIntro } from './styles.css';
// import './styles.css';
import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.AppComp}>
        <header className='AppHeader'>
          <img src={logo} className='AppLogo' alt="logo" />
          <h1 className='AppTitle'>Welcome to React</h1>
        </header>
        <p className='AppIntro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='pippo'>ZIO PAPERONE</p>
      </div>
    );
  }
}

export default App;
