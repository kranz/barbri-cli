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
              <Grid.Column width={4} className={styles.Sticky}>
                <Sidebar
                  loading={loading}
                  title='Foods'
                  list={foods.map((food) => food.Name)}
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
                    Name, UnitMeasure, UnitPrice, VatCode, Category, Attachments
                  } = foods.find((food) => slug(food.Name) === match.params.foodId)
                  var imagePath = ''
                  if (Attachments[0]) {
                    imagePath = Attachments[0].avatar
                  } else {
                    imagePath = '/paragraph.png'
                  }
                  return (
                    <Card>
                        <Image size='medium' src={imagePath} />
                        <Card.Content>
                          <Card.Header>{Name}</Card.Header>
                          <Card.Meta>
                            <p className={styles.CardMeta}>
                              <Icon name='money' />
                              {t('foods.unitprice')}: {Intl.NumberFormat(i18n.language, { style: 'currency', currency: 'EUR' }).format(UnitPrice)}
                              &nbsp;
                              ({t('foods.vatlabel')}: {Intl.NumberFormat('it-IT', { style: 'percent'}).format(VatCode)})
                            </p>
                            <p>
                              <Icon name='balance' />&nbsp;
                              {t('foods.unitmeasure')}: {UnitMeasure}
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
