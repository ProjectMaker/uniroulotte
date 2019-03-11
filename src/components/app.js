import React, {Component} from 'react'
import { Provider } from 'react-redux'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { defaultStore } from '../stores'
import {theme} from './theme'
import DevisList from './pages/list'
import AccountLogin from '../containers/pages/account/login'
import Home from './pages/home/index'
import Confirm from './pages/confirm'
import NavBar from '../containers/components/common/nav-bar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={defaultStore}>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Home}/>
              <Route path="/confirm" component={Confirm}/>
              <Route path="/list" component={DevisList}/>
              <Route path="/account/login" component={AccountLogin}/>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
