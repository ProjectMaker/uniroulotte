import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

import styles from './basket-simulator-styles'

const Simulator = ({area, equipments, windows, door, roofing}) => {
  const total = area + equipments + window + equipments + windows + equipments + roofing + equipments
  return (
    <div>
      <Typography>Surface : {area.toLocaleString()} €</Typography>
      {equipments ? <Typography>Chambre séparée {equipments.toLocaleString()} €</Typography> : ''}
      <Typography>Pièces d'eau {equipments.toLocaleString()} €</Typography>
      <Typography>Fenêtres {window.toLocaleString()} €</Typography>
      <Typography>Porte d'entrée {door.toLocaleString()} €</Typography>
      <Typography>Volets {windows.toLocaleString()} €</Typography>
      <Typography>Balcon {equipments.toLocaleString()} €</Typography>
      <Typography>Toiture {roofing.toLocaleString()} €</Typography>
      <br/><br/>
      <Typography>Total {total.toLocaleString()} €</Typography>
    </div>
  )
}

Simulator.propTypes = {
  area: PropTypes.object.isRequired,
  equipments: PropTypes.array.isRequired,
  door: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired,
  roofing: PropTypes.object.isRequired
}
export default withStyles(styles)(Simulator)
