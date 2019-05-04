import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  RETRIEVE_CURRENT_USER,
  RETRIEVE_CURRENT_USER_SUCCESS
} from '../constants'

const INITIAL_STATE = {
  isFetched: false,
  isLoading: false,
  data: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        isLoading: true
      }
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: true,
        error: null,
        data: action.user
      }
    case SIGNIN_USER_ERROR:
      return {
        ...state,
        isFetched: true,
        isLoading: true,
        error: action.error
      }
    case RETRIEVE_CURRENT_USER:
      return {
        ...state,
        isLoading: true
      }
    case RETRIEVE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: true,
        data: action.user,
        error: null
      }
    case SIGNOUT_USER:
      return {
        ...state,
        isLoading: false
      }
    case SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        data: null,
        isLoading: true,
        error: null
      }
    case 'REQUEST_USER':
      return Object.assign({}, state, {
        isLoading: true
      })
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetched: true,
        isLoading: true,
        data: action.payload
      })
    case 'SIGNIN_ERROR':
      return Object.assign({}, state, {
        isFetched: true,
        isLoading: true,
        error: action.payload
      })

    default:
      return state
  }
}

