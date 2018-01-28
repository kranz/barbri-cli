import React, { Component } from 'react';
import logo from './logo.svg';
// import { AppComp, AppHeader, AppLogo, AppTitle, AppIntro } from './styles.css';
// import './styles.css';
import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.AppComp}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={styles.pippo}>ZIO PAPERONE</p>
      </div>
    );
  }
}

export default App;
