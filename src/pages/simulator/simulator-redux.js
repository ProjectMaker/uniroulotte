import { connect } from 'react-redux'
import {
  changeSimulation,
  calculateSimulationPrice,
  resetSimulation
} from '../../redux/actions/simulator-actions'

import SimulatorContainer from './simulator-container'

const mapStateToProps = (state) => ({
  price: state.simulator.price,
  area: state.simulator.area,
  equipments: state.simulator.equipments,
  door: state.simulator.door,
  windows: state.simulator.windows,
  roofing: state.simulator.roofing,
  sendingError: state.simulator.sendingError
})

const mapDispatchToProps = dispatch => ({
  changeSimulation: (key, value) => dispatch(changeSimulation(key, value)),
  calculatePrice: () => dispatch(calculateSimulationPrice()),
  resetSimulation: () => dispatch(resetSimulation())
})

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorContainer)
