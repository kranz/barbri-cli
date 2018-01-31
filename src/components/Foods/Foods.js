import React, { Component } from 'react'
import { I18n } from 'react-i18next'
import Sidebar from '../Sidebar/Sidebar'
import { getFoods } from '../../api'
import { parse } from 'query-string'
import slug from 'slug'

export default class Foods extends Component {
  state = {
    foods: [],
    loading: true,
  }
  componentDidMount () {
    this.fetchFoods()
  }
  fetchFoods = () => {
    getFoods()
      .then((foods) => this.setState(() => ({
        loading: false,
        foods,
      })))
  }
  render() {
    const { foods, loading } = this.state
    const { match, location } = this.props

    return (
      <I18n ns='translations'>
        {
          (t, {i18n}) => (
            <div className='container two-column'>
              <Sidebar
                loading={loading}
                title='Foods'
                list={foods.map((food) => food.name)}
                {...this.props}
              />
            {loading === false && location.pathname === '/foods'
                ? <div className='sidebar-instruction'>Select a Food</div>
                : null}
            </div>
          )
        }
      </I18n>
    )
  }
}

/*
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
*/
