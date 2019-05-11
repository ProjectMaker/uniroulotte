import {
  calculatePrice
} from '../../api/quotation'

import {
  CHANGE_SIMULATION_PROCESS,
  CALCULATE_SIMULATION_PRICE,
  RESET_SIMULATION,
  SEND_SIMULATION_START,
  SEND_SIMULATION_SUCCESS,
  SEND_SIMULATION_ERROR,
} from '../../constants'

const INITIAL_STATE = {
  area: {
    largeur: 2,
    longueur: 4
  },
  equipments: [],
  door: {
    type: 'full'
  },
  windows: [],
  roofing: {
    label: 'Tôles plates galvanisées',
    value: 'tolegalva'
  },
  price: 0,
  sendingInProgress: false,
  sendingError: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIMULATION_PROCESS:
      const newState = {
        ...state,
        [action.item.key]: action.item.value
      }
      return newState
    case CALCULATE_SIMULATION_PRICE:
      return {
        ...state,
        price: calculatePrice({...state})
      }
    case RESET_SIMULATION:
      return INITIAL_STATE
    case SEND_SIMULATION_START:
      return {
        ...state,
        sendingInProgress: true,
        sendingError: null
      }
    case SEND_SIMULATION_SUCCESS:
      return {
        ...state,
        sendingInProgress: false,
        sendingError: null
      }
    case SEND_SIMULATION_ERROR:
      return {
        ...state,
        sendingInProgress: false,
        sendingError: action.error
      }
    default:
      return state
  }
}
