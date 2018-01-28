import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import styles from './styles.css'
import { translate, Trans } from 'react-i18next'
import { Button, Icon, Grid, Image } from 'semantic-ui-react'
import Home from '../Home/Home'
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import NotFound from '../NotFound/NotFound'

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default translate('translations')(App);
