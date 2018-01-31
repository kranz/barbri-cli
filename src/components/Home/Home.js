import React, { Component } from 'react'
import Torta from './torta1.png'
// import { Link } from 'react-router-dom'
import { Image, Segment } from 'semantic-ui-react'
import { I18n } from 'react-i18next'
import styles from './styles.css'

export default class Home extends Component {
  render() {
    return (
      <I18n ns='translations'>
        {
          (t, { i18n }) => (
            <div>
              <Image centered src={ Torta } size='medium' />
              <Segment>
                <h1 className={styles.AppTitle}>{t('apptitle')}</h1>
              </Segment>
              <Segment textAlign='center' inverted color='red'>
                <h1>
                  {t('home.meta')}
                </h1>
              </Segment>
              <Segment textAlign='center' inverted color='blue'>
                <h2>
                  {t('home.description')}
                </h2>
              </Segment>
            </div>
          )
        }
      </I18n>
    )
  }
}
