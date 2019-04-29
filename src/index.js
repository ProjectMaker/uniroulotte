import React from 'react'
import ReactDOM from 'react-dom'
import Provider from "react-redux/es/components/Provider"
import {MuiThemeProvider} from "@material-ui/core"

import * as serviceWorker from './serviceWorker'
import {theme} from "./theme"
import {defaultStore} from "./stores"
import AppRouter from "./routes"
import './index.css'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={defaultStore}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>
)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
