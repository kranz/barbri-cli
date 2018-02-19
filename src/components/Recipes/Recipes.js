import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { I18n } from 'react-i18next'
import { Grid } from 'semantic-ui-react'
import Sidebar from '../Sidebar/Sidebar'
import { getRecipes } from '../../api'
import styles from './styles.css'

export default class Recipes extends Component {
  state = {
    recipes: [],
    loading: true,
  }
  componentDidMount () {
    this.fetchRecipes()
  }
  fetchRecipes = () => {
    getRecipes()
      .then((recipes) => this.setState(() => ({
        loading: false,
        recipes,
      })))
  }
  render () {
    const { recipes, loading } = this.state
    const { match, location } = this.props
    return (
      <I18n ns='translations'>
      {
        (t, {i18n}) => (
          <Grid>
            <Grid.Column width={4} className={styles.Sticky}>
              <Sidebar
                loading={loading}
                title='Recipes'
                list={recipes.map((recipe) => recipe.Name)}
                {...this.props}
              />
            </Grid.Column>
            <Grid.Column  width={8}>
              {loading === false && location.pathname === '/recipes'
                ? <div className='sidebar-instruction'>Select a Recipe</div>
                : null}
              <Route path='' component='' />
            </Grid.Column>
          </Grid>
        )
      }
      </I18n>
    )
  }
}
