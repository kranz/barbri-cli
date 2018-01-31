import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { I18n } from 'react-i18next'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import Sidebar from '../Sidebar/Sidebar'
import { getFoods } from '../../api'
import slug from 'slug'
import styles from './styles.css'

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
            <Grid>
              <Grid.Column width={4}>
                <Sidebar
                  loading={loading}
                  title='Foods'
                  list={foods.map((food) => food.name)}
                  {...this.props}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                {loading === false && location.pathname === '/foods'
                  ? <div className='sidebar-instruction'>Select a Food</div>
                  : null}
                <Route path={`${match.url}/:foodId`} render={({match}) => {
                  if (loading === true) return null
                  const {
                    name, unitMeasure, unitPrice, vatCode, category, avatar
                  } = foods.find((food) => slug(food.name) === match.params.foodId)
                  return (
                    <Card>
                        <Image src={`/assets/${avatar}`} />
                        <Card.Content>
                          <Card.Header>{name}</Card.Header>
                          <Card.Meta>
                            <p className={styles.CardMeta}>
                              <Icon name='money' />
                              {t('foods.unitprice')}: {Intl.NumberFormat(i18n.language, { style: 'currency', currency: 'EUR' }).format(unitPrice)}
                              &nbsp;
                              ({t('foods.vatlabel')}: {Intl.NumberFormat('it-IT', { style: 'percent'}).format(vatCode)})
                            </p>
                            <p>
                              <Icon name='balance' />&nbsp;
                              {t('foods.unitmeasure')}: {unitMeasure}
                            </p>
                          </Card.Meta>
                          <Card.Description>

                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>
                            <Icon name='user' />
                            10 Friends
                          </a>
                        </Card.Content>
                      </Card>
                  )
                }}/>
              </Grid.Column>
            </Grid>
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
