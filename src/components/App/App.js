import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { I18n } from 'react-i18next';
import Home from '../Home/Home'
import Foods from '../Foods/Foods'
import Navbar from '../Navbar/Navbar'
import NotFound from '../NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
      {
        (t, { i18n }) => (
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/foods' component={Foods} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Router>
        )
      }
      </I18n>
    );
  }
}

export default App;
