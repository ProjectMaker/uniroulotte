import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'

import DevisList from '../pages/list/list'
import AccountLogin from '../pages/account/login/login-redux'
import Simulator from '../pages/simulator/simulator-container'
import Confirm from '../pages/confirm/confirm'
import NavBar from '../components/nav-bar/nav-bar-redux'
import withAuth from './with-auth'
import browserHistory from './history'

export default () => (
  <Router history={browserHistory}>
    <div>
      <NavBar />
      <Route exact path="/" component={Simulator}/>
      <Route path="/confirm" component={Confirm}/>
      <Route path="/list" component={withAuth(DevisList)}/>
      <Route path="/account/login" component={AccountLogin}/>
    </div>
  </Router>
)
