import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

import Simulator from './simulator'
import ModalError from '../../components/shared/modal-error'

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
    price: PropTypes.number.isRequired,
    sendSimulation: PropTypes.func.isRequired,
    sendingInProgress: PropTypes.bool.isRequired,
    sendingError: PropTypes.string
  }
  state = {
    showModalError: false
  }

  handleSendSimulation = (firstname, lastname, email, phoneNumber) => {
    this.props.sendSimulation({firstname, lastname, email, phoneNumber})
  }

  componentDidMount() {
    this.props.calculatePrice()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sendingError !== this.props.sendingError) {
      this.setState({showModalError: true})
    }
  }

  componentWillUnmount() {
    this.props.resetSimulation()
  }
  render() {
    const {area, equipments, door, windows, roofing, changeSimulation, sendingInProgress } = this.props
    const {showModalError} = this.state
    return (
      <Fragment>
        <ModalError
          open={showModalError}
          onClose={() => this.setState({showModalError: false})}
          description="Un problème est survenu ...."
        />
        <Simulator
          area={area}
          equipments={equipments}
          door={door}
          windows={windows}
          roofing={roofing}
          onChange={changeSimulation}
          onSubmit={this.handleSendSimulation}
          submissionInProgress={sendingInProgress}
        />
      </Fragment>
    )
  }
}

export default SimulatorContainer
