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

class Basket extends Component {
	render() {
		const {classes, equipments, windows, doors, roofing} = this.props
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
					{doors.length || windows.length ? this.renderOpening() :
						<Typography>Aucune ouverture</Typography>
					}
				</div>
				<Typography variant={"h6"} classes={{root: classes.title}}>Toiture / Couverture</Typography>
				<div className={classes.detail}>
					<Typography>{roofing.name}</Typography>
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
					{equipment.name}
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
		const result = []
		if (archs.length) {
			result.push(<Typography key={"basket-window-arch"}>{archs.length} fenêtre(s) cintrée(s)</Typography>)
		}
		if (shutterArchs.length) {
			result.push(<Typography key={"basket-shutter-arch"}>{shutterArchs.length} volet(s) cintrée(s)</Typography>)
		}
		if (rectangulars.length) {
			result.push(<Typography key={"basket-window-rectangular"}>{rectangulars.length} fenêtre(s)
				rectangulaire(s)</Typography>)
		}
		if (shutterRectangulars.length) {
			result.push(<Typography key={"basket-shutter-rectangular"}>{shutterRectangulars.length} volet(s)
				rectangulaire(s)</Typography>)
		}
		return result
	}
}

Basket.propTypes = {
	area: PropTypes.object.isRequired,
	equipments: PropTypes.array.isRequired,
	doors: PropTypes.array.isRequired,
	windows: PropTypes.array.isRequired,
	roofing: PropTypes.object.isRequired
}
export default withStyles(styles)(Basket)
