import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import { theme } from './theme'
import Home from './pages/home/index'
import Confirm from './pages/confirm'
import NavBar from './common/nav-bar'

class App extends Component {
  render() {
    return (
			<MuiThemeProvider theme={theme}>
				<NavBar/>
				<Router>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/confirm" component={Confirm} />
					</div>
				</Router>
			</MuiThemeProvider>
    )
  }
}

export default App;
