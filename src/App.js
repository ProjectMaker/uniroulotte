import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Home from './components/pages/home/index'

const theme = createMuiTheme({
	palette: {
		primary: { main: '#7eb940' }
	},
	typography: {
		useNextVariants: true,
		h6: {
			color: '#ac5252'
		},
		subtitle1: {
			fontWeight: 500
		}
	}
});

class App extends Component {
  render() {
    return (
			<MuiThemeProvider theme={theme}>
				<Home />
			</MuiThemeProvider>
    )
  }
}

export default App;
