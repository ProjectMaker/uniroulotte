import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import Simulator from './simulator'
import ModalError from "../../components/shared/modal-error";
import {
  sendDemand
} from "../../api/quotation"

class SimulatorContainer extends Component {
  static propTypes = {
    area: PropTypes.object.isRequired,
    equipments: PropTypes.array.isRequired,
    door: PropTypes.object.isRequired,
    windows: PropTypes.array.isRequired,
    roofing: PropTypes.object.isRequired,
    changeSimulation: PropTypes.func.isRequired,
    calculatePrice: PropTypes.func.isRequired,
    resetSimulation: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired
  }
  state = {
    sendingInProgress: false,
    sendingInError: false
  }

  sendQuotation = (firstname, lastname, email, phoneNumber) => {
    const {area, equipments, windows, door, roofing, price} = this.props
    const detail = {area, equipments, windows, door, roofing}
    this.setState({sendingInProgress: true})
    sendDemand(email, firstname, lastname, phoneNumber, price.toLocaleString(), detail)
      .then(res => {
        this.setState(
          () => ({sendingInError: false, sendingInProgress: false}),
          () => this.props.history.push('/confirm')
        )
      })
      .catch(err => this.setState({sendingInError: true, sendingInProgress: false}))
  }

  componentDidMount() {
    this.props.calculatePrice()
  }

  componentWillUnmount() {
    this.props.resetSimulation()
  }
  render() {
    const {area, equipments, door, windows, roofing, changeSimulation } = this.props
    const {sendingInError, sendingInProgress} = this.state
    return (
      <Fragment>
        <ModalError
          open={sendingInError}
          onClose={() => this.setState({sendingInError: false})}
          description="Un problème est survenu ...."
        />
        <Simulator
          area={area}
          equipments={equipments}
          door={door}
          windows={windows}
          roofing={roofing}
          onChange={changeSimulation}
          onSubmit={this.sendQuotation}
          submissionInProgress={sendingInProgress}
          submissionError={sendingInError}
        />
      </Fragment>
    )
  }
}

export default SimulatorContainer
