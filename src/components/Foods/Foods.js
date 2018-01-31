import React, { Component } from 'react'
import { I18n } from 'react-i18next'

export default class Foods extends Component {
  render() {
    return (
          <I18n ns='translations'>
            {
              (t, {i18n}) => (
                <div className='container two-column'>
                  {t('navbar.foods')}
                </div>
              )
            }
          </I18n>
    )
  }
}
