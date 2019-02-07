import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

import { PRICES } from "../../../assets/constants"

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
		const area = this.calculateArea()
		const roomWater = this.calculateRoomWater()
		const bedroom = this.calculateBedroom()
		const window = this.calculateWindow()
		const entryDoor = this.calculateEntryDoor()
		const shutter = this.calculateShutter()
		const balcony = this.calculateBalcony()
		const roofing = this.calculateRoofing()
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

	calculateArea() {
		const {area: {largeur, longueur}} = this.props

		return Math.ceil((largeur * longueur) * PRICES['area'])
	}

	calculateBedroom() {
		const {equipments} = this.props
		const nbRooms = equipments.filter(equipment => ['bedroomSepareted'].includes(equipment.value)).length
		return nbRooms * ( PRICES['room'] + PRICES['interiorDoor'] )
	}

	calculateRoomWater() {
		const {equipments} = this.props
		const nbRooms = equipments.filter(equipment => ['bathroom','kitchen'].includes(equipment.value)).length
		return nbRooms * PRICES['room']
	}

	calculateWindow() {
		const {windows} = this.props
		const nbArchs = windows.filter(window => window.type === 'arch').length
		const nbRectangulars = windows.filter(window => window.type === 'rectangular').length

		return (nbArchs * PRICES['window']['arch']) + (nbRectangulars * PRICES['window']['rectangular'])
	}

	calculateEntryDoor() {
		const {door} = this.props

		if (door.type === 'full') {
			return PRICES['entryDoor']['full']
		} else if (door.type === 'semiGlazed') {
			return PRICES['entryDoor']['semiGlazed']
		} else if (door.type === 'glazed') {
			return PRICES['entryDoor']['glazed']
		}
		return 0
	}

	calculateShutter() {
		const {windows} = this.props
		const nbShutters = windows.filter(window => window.shutter).length

		return nbShutters * PRICES['shutter']
	}

	calculateBalcony() {
		const {equipments} = this.props
		if (equipments.findIndex(equipment => equipment.value === 'balcony') > -1) {
			return PRICES['balcony']
		}
		return 0
	}

	calculateRoofing() {
		const {roofing, area: {largeur, longueur}} = this.props
		const price = PRICES['roofing'][roofing.value]

		return Math.ceil(largeur * longueur * price)
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
