import React, {Component} from 'react'
import { Provider } from 'react-redux'
import {MuiThemeProvider} from '@material-ui/core/styles'

import { defaultStore } from '../stores'
import {theme} from './theme'
import AppRouter from '../containers/router'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={defaultStore}>
          <AppRouter />
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App;
