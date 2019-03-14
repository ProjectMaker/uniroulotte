import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import DevisList from '../containers/pages/list'
import AccountLogin from '../containers/pages/account/login'
import Home from './pages/home/index'
import Confirm from './pages/confirm'
import NavBar from '../containers/components/common/nav-bar'

class AppRouter extends Component {
  componentDidMount () {
    this.props.authenticateUser()
  }
  render() {
    const {user} = this.props
    return user.isLoading && user.isFetched ? (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/confirm" component={Confirm}/>
          <Route path="/list" component={DevisList}/>
          <Route path="/account/login" component={AccountLogin}/>
        </div>
      </Router>
    ) : <h3>Loading ...</h3>
  }
}

AppRouter.propTypes = {
  user: PropTypes.object.isRequired,
  authenticateUser: PropTypes.func.isRequired
}

export default AppRouter
