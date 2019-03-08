const INITIAL_STATE = {
  isFetching: undefined,
  data: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      })
    default:
      return state
  }
}

