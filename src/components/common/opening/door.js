import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography";
import Radio from '@material-ui/core/Radio';
import {withStyles} from '@material-ui/core/styles'

const styles = {
	wrapper: {
		padding: '22px 10px',
	},

	doors: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'red'
	},

	radio: {
		padding: '0 10px'
	},

	doorsSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '40px',
		'& .value': {
			margin: '0 10px'
		},

		'& .icon': {
			cursor: 'pointer'
		}
	},

	door: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	doorSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '104px',
	},

	typeLabel: {
		cursor: 'pointer'
	}
}

class OpeningDoor extends Component {
	render() {
		const {classes, door} = this.props
		return (
			<div className={classes.door}>
				<Typography>
					Porte d'entrée
				</Typography>
				<div className={classes.doorSelector}>
					<Radio
						classes={{root: classes.radio}}
						checked={door.type === 'arch'}
						onChange={() => this.handleChangeDoorType('arch')}
					/>
					<Typography classes={{root: classes.typeLabel}}
											onClick={() => this.handleChangeDoorType('arch')}>Cintrée</Typography>
					<Radio
						classes={{root: classes.radio}}
						checked={door.type === 'rectangular'}
						onChange={() => this.handleChangeDoorType('rectangular')}
					/>
					<Typography classes={{root: classes.typeLabel}}
											onClick={() => this.handleChangeDoorType('rectangular')}>Rectangulaire</Typography>
				</div>
			</div>
		)
	}

	renderDoorsSelector() {
		const {classes, door} = this.props
		return (
			<div className={classes.door}>
				<Typography>
					Porte d'entrée
				</Typography>
				<div className={classes.doorSelector}>
					<Radio
						checked={door.type === 'arch'}
						onChange={() => this.handleChangeDoorType('arch')}
					/>
					<Typography classes={{root: classes.typeLabel}}
											onClick={() => this.handleChangeDoorType('arch')}>Cintrée</Typography>
					<Radio
						checked={door.type === 'rectangular'}
						onChange={() => this.handleChangeDoorType('rectangular')}
					/>
					<Typography classes={{root: classes.typeLabel}}
											onClick={() => this.handleChangeDoorType('rectangular')}>Rectangulaire</Typography>
				</div>
			</div>
		)
	}

	renderDoor() {
		const {doors, classes} = this.props
		return doors.map((door, idx) => {
			return (
				<div key={`door-${idx}`} className={classes.door}>
					<Typography>Porte {idx + 1}</Typography>
					<div className={classes.doorSelector}>
						<Radio
							checked={door.type === 'arch'}
							onChange={() => this.handleChangeDoorType(idx, 'arch')}
						/>
						<Typography classes={{root: classes.typeLabel}}
												onClick={() => this.handleChangeDoorType(idx, 'arch')}>Cintrée</Typography>
						<Radio
							checked={door.type === 'rectangular'}
							onChange={() => this.handleChangeDoorType(idx, 'rectangular')}
						/>
						<Typography classes={{root: classes.typeLabel}}
												onClick={() => this.handleChangeDoorType(idx, 'rectangular')}>Rectangulaire</Typography>
					</div>
				</div>
			)
		})
	}

	handleChangeDoorType(type) {
		const {onChange, door} = this.props
		door.type = type
		onChange(door)
	}
}

OpeningDoor.propTypes = {
	door: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}
export default withStyles(styles)(OpeningDoor)
