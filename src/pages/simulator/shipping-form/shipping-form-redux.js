import { connect } from 'react-redux'
import {
  sendSimulation
} from '../../../redux/actions/simulator-actions'

import ShippingFormContainer from './shipping-form-container'


const mapStateToProps = (state) => ({
  sendingInProgress: state.simulator.sendingInProgress
})

const mapDispatchToProps = dispatch => ({
  sendSimulation: (user) => dispatch(sendSimulation(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShippingFormContainer)
