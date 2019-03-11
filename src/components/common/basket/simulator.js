import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

import {
  calculateArea,
  calculateBalcony,
  calculateBedroom,
  calculateEntryDoor,
  calculateRoofing,
  calculateRoomWater,
  calculateShutter,
  calculateWindow
} from "../../../assets/api/quotation"

const styles = {
  title: {
    marginBottom: '10px'
  },

  detail: {
    marginBottom: '30px'
  }
}

class Simulator extends Component {
  render() {
    const area = calculateArea(this.props.area)
    const roomWater = calculateRoomWater(this.props.equipments)
    const bedroom = calculateBedroom(this.props.equipments)
    const window = calculateWindow(this.props.windows)
    const entryDoor = calculateEntryDoor(this.props.door)
    const shutter = calculateShutter(this.props.windows)
    const balcony = calculateBalcony(this.props.equipments)
    const roofing = calculateRoofing(this.props.roofing, this.props.area)
    const total = area + roomWater + window + entryDoor + shutter + balcony + roofing + bedroom
    return (
      <div>
        <Typography>Surface : {area.toLocaleString()} €</Typography>
        {bedroom ? <Typography>Chambre séparée {bedroom.toLocaleString()} €</Typography> : ''}
        <Typography>Pièces d'eau {roomWater.toLocaleString()} €</Typography>
        <Typography>Fenêtres {window.toLocaleString()} €</Typography>
        <Typography>Porte d'entrée {entryDoor.toLocaleString()} €</Typography>
        <Typography>Volets {shutter.toLocaleString()} €</Typography>
        <Typography>Balcon {balcony.toLocaleString()} €</Typography>
        <Typography>Toiture {roofing.toLocaleString()} €</Typography>
        <br/><br/>
        <Typography>Total {total.toLocaleString()} €</Typography>
      </div>
    )
  }
}

Simulator.propTypes = {
  area: PropTypes.object.isRequired,
  equipments: PropTypes.array.isRequired,
  door: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired,
  roofing: PropTypes.object.isRequired
}
export default withStyles(styles)(Simulator)
