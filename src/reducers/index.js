import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'

import userReducer from './user-reducers'

export default combineReducers({
  user: userReducer
  //routing: routerReducer
})
