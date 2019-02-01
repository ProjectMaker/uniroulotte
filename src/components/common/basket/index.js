import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

const styles = {
	title: {
		marginBottom: '10px'
	},

	detail: {
		marginBottom: '30px'
	}
}
const doors = [
	{
		label: 'Pleine',
		value: 'full'
	}, {
		label: 'Semi vitrée',
		value: 'semiGlazed'
	}, {
		label: 'Grand jour',
		value: 'glazed'
	}
]

class Basket extends Component {
	render() {
		const {classes, equipments, door, roofing} = this.props
		return (
			<div>
				<Typography variant={"h6"} classes={{root: classes.title}}>Superficie</Typography>
				<div className={classes.detail}>
					{this.renderArea()}
				</div>
				<Typography variant={"h6"} classes={{root: classes.title}}>Equipements</Typography>
				<div className={classes.detail}>
					{equipments.length ? this.renderEquipments() :
						<Typography>Aucun équipement</Typography>
					}
				</div>
				<Typography variant={"h6"} classes={{root: classes.title}}>Ouvertures</Typography>
				<div className={classes.detail}>
					<Typography>Porte d'entrée {doors.find(_door => _door.value === door.type).label}</Typography>
					{this.renderWindows()}
				</div>
				<Typography variant={"h6"} classes={{root: classes.title}}>Toiture / Couverture</Typography>
				<div className={classes.detail}>
					<Typography>{roofing.label}</Typography>
				</div>
			</div>
		)
	}

	renderArea() {
		const {area: {largeur, longueur}} = this.props
		return (
			<React.Fragment>
				<Typography>
					Largeur : {`${largeur.toFixed(2)}m`}
				</Typography>
				<Typography>
					Longueur : {`${longueur.toFixed(2)}m`}
				</Typography>
				<Typography>
					Surface {(largeur * longueur).toFixed(2)} m²
				</Typography>
			</React.Fragment>
		)
	}

	renderEquipments() {
		const {equipments} = this.props
		return equipments.map((equipment, idx) => {
			return (
				<Typography key={`basket-equipments-${idx}`}>
					{`${equipment.label}${equipment.door ? ' avec porte' : ''}`}
				</Typography>
			)
		})
	}

	renderOpening() {
		return [
			this.renderDoors(),
			this.renderWindows()
		]
	}

	renderDoors() {
		const {doors} = this.props
		const archs = doors.filter(door => door.type === 'arch')
		const rectangulars = doors.filter(door => door.type === 'rectangular')
		const result = []
		if (archs.length) {
			result.push(<Typography key={"basket-door-arch"}>{archs.length} porte(s) cintrée(s)</Typography>)
		}
		if (rectangulars.length) {
			result.push(<Typography key={"basket-door-rectangular"}>{rectangulars.length} porte(s)
				rectangulaire(s)</Typography>)
		}
		return result
	}

	renderWindows() {
		const {windows} = this.props
		const archs = windows.filter(window => window.type === 'arch')
		const shutterArchs = archs.filter(window => window.shutter)
		const rectangulars = windows.filter(window => window.type === 'rectangular')
		const shutterRectangulars = rectangulars.filter(window => window.shutter)
		let labelArchs = `${archs.length} fenêtre(s) cintrée(s)`
		labelArchs += shutterArchs.length ? ` avec ${shutterArchs.length} volet(s)` : ''
		let labelRectangulars = `${rectangulars.length} fenêtre(s) rectangulaire(s)`
		labelRectangulars += shutterRectangulars.length ? ` avec ${shutterRectangulars.length} volet(s)` : ''
		const result = []
		if (archs.length) {
			result.push(<Typography key={"basket-window-arch"}>{labelArchs}</Typography>)
		}
		if (rectangulars.length) {
			result.push(<Typography key={"basket-window-rectangular"}>{labelRectangulars}</Typography>)
		}

		return result
	}
}

Basket.propTypes = {
	area: PropTypes.object.isRequired,
	equipments: PropTypes.array.isRequired,
	door: PropTypes.object.isRequired,
	windows: PropTypes.array.isRequired,
	roofing: PropTypes.object.isRequired
}
export default withStyles(styles)(Basket)
