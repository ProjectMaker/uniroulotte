import {
  FETCH_QUOTATIONS_START,
  FETCH_QUOTATIONS_SUCCESS,
  FETCH_QUOTATIONS_ERROR
} from '../../constants'

const INITIAL_STATE = {
  isFetched: false,
  isLoading: false,
  quotations: [],
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUOTATIONS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_QUOTATIONS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        error: null,
        quotations: action.quotations
      }
    case FETCH_QUOTATIONS_ERROR:
      return {
        ...state,
        isFetched: false,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

