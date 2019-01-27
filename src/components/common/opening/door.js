import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography";
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import {withStyles} from '@material-ui/core/styles'

const styles = {
	wrapper: {
		padding: '22px 10px',
	},

	doors: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	doorsSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: '50px',
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
		return (
			<div>
				{this.renderDoorsSelector()}
				{this.renderDoor()}
			</div>
		)
	}

	renderDoorsSelector() {
		const {classes, doors} = this.props
		return (
			<div className={classes.doors}>
				<Typography>
					Nombre de portes
				</Typography>
				<div className={classes.doorsSelector}>
					<div className={"icon"} onClick={() => this.handleAddDoor(-1)}>
						<RemoveIcon color={"secondary"} onClick={() => console.log('clic')}/>
					</div>
					<div className={"value"}>{doors.length}</div>
					<div className={"icon"} onClick={() => this.handleAddDoor(1)}>
						<AddIcon color={"primary"}/>
					</div>
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

	handleAddDoor(inc) {
		const {onChange} = this.props
		const doors = this.props.doors.slice()
		if (doors.length === 0 && inc < 0) {
			return
		}
		if (inc === -1) {
			doors.shift()
		} else {
			doors.push({type: 'arch'})
		}
		onChange(doors)
	}

	handleChangeDoorType(idx, type) {
		const {onChange} = this.props
		const doors = this.props.doors.slice()
		doors[idx].type = type
		onChange(doors)
	}
}

OpeningDoor.propTypes = {
	doors: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}
export default withStyles(styles)(OpeningDoor)
