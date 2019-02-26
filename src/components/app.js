import React, {Component} from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {theme} from './theme'
import DevisList from './pages/list'
import AccountLogin from './pages/account/login'
import Home from './pages/home/index'
import Confirm from './pages/confirm'
import NavBar from './common/nav-bar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route path="/confirm" component={Confirm}/>
            <Route path="/list" component={DevisList}/>
            <Route path="/account/login" component={AccountLogin}/>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
