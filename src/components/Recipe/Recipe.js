import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { I18n } from 'react-i18next'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import Sidebar from '../Sidebar/Sidebar'
import { getRecipes } from '../../api'
import slug from 'slug'
import styles from './styles.css'


export default class Recipe extends Component {
  state = {
    recipe: [],
    loading: true,
  }
  componentDidMount () {
    this.fetchRecipe(recipe_id)
  }
}
