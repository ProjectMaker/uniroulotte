import { connect } from 'react-redux'
import {
  changeSimulation,
  resetSimulation
} from '../../../redux/actions/simulator-actions'

import SimulatorForm from './simulator-form'

const mapStateToProps = (state) => ({
  price: state.simulator.price,
  area: state.simulator.area,
  equipments: state.simulator.equipments,
  door: state.simulator.door,
  windows: state.simulator.windows,
  roofing: state.simulator.roofing
})

const mapDispatchToProps = dispatch => ({
  changeSimulation: (key, value) => dispatch(changeSimulation(key, value)),
  resetSimulation: () => dispatch(resetSimulation())
})

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorForm)
