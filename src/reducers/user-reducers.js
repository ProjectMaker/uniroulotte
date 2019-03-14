const INITIAL_STATE = {
  isFetched: false,
  isLoading: false,
  data: null,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

