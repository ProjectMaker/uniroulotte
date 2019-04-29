import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux';

import browserHistory from '../routes/history'
import {retrieveCurrentUser} from '../actions/user-actions'
import reducers from '../reducers'
import saga from './saga'

const reduxRouterMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunkMiddleware, sagaMiddleware, reduxRouterMiddleware]

export const defaultStore = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(saga)

defaultStore.dispatch(retrieveCurrentUser())
