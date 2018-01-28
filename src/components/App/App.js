import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './styles.css'
import { translate, Trans } from 'react-i18next';
import { Button, Icon, Grid, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <div className={styles.AppComp}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2 className={styles.AppTitle}>{t('title')}</h2>
          <button onClick={() => changeLanguage('it')}>it</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <button onClick={() => changeLanguage('de')}>de</button>
        </header>
        <p className={styles.AppIntro}>
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <p className={styles.pippo}>{t('description.part2')}</p>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='./image.png' />
            </Grid.Column>
            <Grid.Column width={13}>
              <Image src='./centered-paragraph.png' />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='./image.png' />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src='./paragraph.png' />
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src='./image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default translate('translations')(App);
