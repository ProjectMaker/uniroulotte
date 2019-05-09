import {
  CHANGE_SIMULATION_PROCESS,
  CALCULATE_SIMULATION_PRICE,
  RESET_SIMULATION
} from '../../constants'

export const changeSimulation = (key, value) => (dispatch) => {
  dispatch(changeSimulationProcess(key, value))
  dispatch(calculateSimulationPrice())
}

export const changeSimulationProcess = (key, value) => {
  return {
    type: CHANGE_SIMULATION_PROCESS,
    item: {
      key,
      value
    }
  }
}

export const calculateSimulationPrice = () => {
  return {
    type: CALCULATE_SIMULATION_PRICE
  }
}

export const resetSimulation = () => {
  return {
    type: RESET_SIMULATION
  }
}
