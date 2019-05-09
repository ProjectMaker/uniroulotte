import { combineReducers } from 'redux'

import userReducer from './user-reducers'
import quotationReducer from './quotation-reducer'
import simulatorReducer from './simulator-reducer'

export default combineReducers({
  user: userReducer,
  quotation: quotationReducer,
  simulator: simulatorReducer
})
