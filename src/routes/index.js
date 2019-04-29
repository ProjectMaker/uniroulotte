import React from 'react'
import {
  Router,
  Route,
} from 'react-router-dom'

import DevisList from '../containers/pages/list'
import AccountLogin from '../containers/pages/account/login'
import Home from '../pages/home/index'
import Confirm from '../pages/confirm'
import NavBar from '../containers/components/shared/nav-bar'
import withAuth from './with-auth'
import browserHistory from './history'

export default () => (
  <Router history={browserHistory}>
    <div>
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/confirm" component={Confirm}/>
      <Route path="/list" component={withAuth(DevisList)}/>
      <Route path="/account/login" component={AccountLogin}/>
    </div>
  </Router>
)
