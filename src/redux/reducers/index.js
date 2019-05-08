import { combineReducers } from 'redux'

import userReducer from './user-reducers'
import quotationReducer from './quotation-reducer'

export default combineReducers({
  user: userReducer,
  quotation: quotationReducer
})
