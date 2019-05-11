import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from '@material-ui/core/styles'

import Surface from "../../../components/surface";
import Equipments from "../../../components/equipment";
import Opening from "../../../components/opening";
import Roofing from "../../../components/roofing";
import styles from './simulator-form-styles'

import {EQUIPMENTS, WINDOWS, ROOFING} from '../../../constants'

const SimulatorForm = ({
  area,
  door,
  equipments,
  windows,
  roofing,
  expanded,
  onExpand,
  changeSimulation
}) => (
  <div>
    <ExpansionPanel expanded={expanded === 'area'} onChange={() => onExpand('area')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant={"subtitle1"}>Superficie</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{width: '100%'}}>
          <Surface
            area={area}
            onChange={(area) => changeSimulation('area', area)}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'equipment'} onChange={() => onExpand('equipment')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant={"subtitle1"}>Equipements / Aménagements</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{width: '100%'}}>
          <Equipments
            items={EQUIPMENTS}
            itemsSelected={equipments}
            onChange={(items) => changeSimulation('equipments', items)}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'opening'} onChange={() => onExpand('opening')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant={"subtitle1"}>Ouvertures</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{width: '100%'}}>
          <Opening
            door={door}
            onChangeDoor={(door) => changeSimulation('door', door)}
            windows={windows}
            windowsAvailable={WINDOWS}
            onChangeWindows={(windows) => changeSimulation('windows', windows)}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={expanded === 'roofing'} onChange={() => onExpand('roofing')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant={"subtitle1"}>Toiture / Couverture</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div style={{width: '100%'}}>
          <Roofing
            items={ROOFING}
            itemSelected={roofing}
            onChange={(item) => changeSimulation('roofing',item)}/>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

SimulatorForm.propTypes = {
  expanded: PropTypes.string.isRequired,
  area: PropTypes.object.isRequired,
  equipments: PropTypes.array.isRequired,
  windows: PropTypes.array.isRequired,
  door: PropTypes.object.isRequired,
  roofing: PropTypes.object.isRequired,
  changeSimulation: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired
}

export default withStyles(styles)(SimulatorForm)
