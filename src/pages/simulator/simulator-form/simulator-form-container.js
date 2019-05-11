import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SimulatorForm from './simulator-form'

class SimulatorFormContainer extends Component {
  static propTypes = {
    area: PropTypes.object.isRequired,
    equipments: PropTypes.array.isRequired,
    windows: PropTypes.array.isRequired,
    door: PropTypes.object.isRequired,
    roofing: PropTypes.object.isRequired,
    changeSimulation: PropTypes.func.isRequired
  }

  state = {
    expanded: ''
  }

  handleExpandPanel = (panel) => {
    const {expanded} = this.state
    if (panel === expanded) {
      this.setState({expanded: ''})
    } else {
      this.setState({expanded: panel})
    }
  }

  render() {
    const {expanded} = this.state
    const {
      area,
      equipments,
      windows,
      door,
      roofing,
      changeSimulation
    } = this.props
    return (
      <SimulatorForm
        onExpand={this.handleExpandPanel}
        expanded={expanded}
        area={area}
        equipments={equipments}
        windows={windows}
        door={door}
        roofing={roofing}
        changeSimulation={changeSimulation}
      />
    )
  }
}

export default SimulatorFormContainer
