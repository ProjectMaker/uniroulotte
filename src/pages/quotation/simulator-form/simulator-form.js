import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from '@material-ui/core/styles'

import Surface from "../../../components/surface/surface";
import Equipments from "../../../components/equipment/equipment";
import Opening from "../../../components/opening/opening";
import Roofing from "../../../components/roofing/roofing";
import styles from './simulator-form-styles'

import {EQUIPMENTS, WINDOWS, ROOFING} from '../../../constants'

class SimulatorForm extends Component {
  static propTypes = {
    area: PropTypes.object.isRequired,
    onChangeArea: PropTypes.func.isRequired,
    equipments: PropTypes.array.isRequired,
    onChangeEquipments: PropTypes.func.isRequired,
    windows: PropTypes.array.isRequired,
    onChangeWindows: PropTypes.func.isRequired,
    door: PropTypes.object.isRequired,
    onChangeDoor: PropTypes.func.isRequired,
    roofing: PropTypes.object.isRequired,
    onChangeRoofing: PropTypes.func.isRequired
  }

  state = {
    expanded: ''
  }

  render() {
    const {expanded} = this.state
    const {
      area,
      onChangeArea,
      equipments,
      onChangeEquipments,
      windows,
      onChangeWindows,
      door,
      onChangeDoor,
      roofing,
      onChangeRoofing
    } = this.props
    return (
      <div>
        <ExpansionPanel expanded={expanded === 'area'} onChange={() => this.handleExpandPanel('area')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant={"subtitle1"}>Superficie</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '100%'}}>
              <Surface
                area={area}
                onChange={(area) => onChangeArea(area)}/>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'equipment'} onChange={() => this.handleExpandPanel('equipment')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant={"subtitle1"}>Equipements / Aménagements</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '100%'}}>
              <Equipments
                items={EQUIPMENTS}
                itemsSelected={equipments}
                onChange={(items) => onChangeEquipments(items)}/>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'opening'} onChange={() => this.handleExpandPanel('opening')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant={"subtitle1"}>Ouvertures</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '100%'}}>
              <Opening
                door={door}
                onChangeDoor={(door) => onChangeDoor(door)}
                windows={windows}
                windowsAvailable={WINDOWS}
                onChangeWindows={(windows) => onChangeWindows(windows)}/>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'roofing'} onChange={() => this.handleExpandPanel('roofing')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant={"subtitle1"}>Toiture / Couverture</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{width: '100%'}}>
              <Roofing
                items={ROOFING}
                itemSelected={roofing}
                onChange={(item) => onChangeRoofing(item)}/>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }

  handleExpandPanel(panel) {
    const {expanded} = this.state
    if (panel === expanded) {
      this.setState({expanded: ''})
    } else {
      this.setState({expanded: panel})
    }
  }
}

export default withStyles(styles)(SimulatorForm)
