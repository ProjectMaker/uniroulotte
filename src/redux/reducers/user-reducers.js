import {
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  RETRIEVE_CURRENT_USER,
  RETRIEVE_CURRENT_USER_SUCCESS, SIGNIN_USER_START
} from '../../constants'

const INITIAL_STATE = {
  isFetched: false,
  isLoading: false,
  data: null,
  error: null
}

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SIGNIN_USER_START:
      return {
        ...state,
        isLoading: true
      }
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        error: null,
        data: action.user
      }
    case SIGNIN_USER_ERROR:
      return {
        ...state,
        isFetched: false,
        isLoading: false,
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
        isLoading: false,
        data: action.user,
        error: null
      }
    case SIGNOUT_USER:
      return {
        ...state,
        isLoading: true
      }
    case SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        data: null,
        isLoading: false,
        isFetched: false,
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

