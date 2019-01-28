import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'

import OpeningWindow from './window'
import OpeningDoor from './door'

const styles = {
	gridDoor: {
		marginTop: '3px'
	}
}

class Opening extends Component {
	render() {
		const {classes, door, windows} = this.props
		return (
			<div>
				<Grid container spacing={8}>
					<Grid item xs={6} classes={{root: classes.gridDoor}}>
						<div className={classes.gridDoor}>
							<OpeningDoor door={door} onChange={(doors) => this.handleChangeDoor(door)}/>
						</div>
					</Grid>
					<Grid item xs={6}>
						<OpeningWindow windows={windows} onChange={(windows) => this.handleChangeWindows(windows)}/>
					</Grid>
				</Grid>
			</div>
		)
	}

	handleChangeDoor(door) {
		const {onChangeDoor} = this.props
		onChangeDoor(door)
	}

	handleChangeWindows(windows) {
		const {onChangeWindows} = this.props
		onChangeWindows(windows)
	}
}

Opening.propTypes = {
	door: PropTypes.object.isRequired,
	windows: PropTypes.array.isRequired,
	onChangeDoor: PropTypes.func.isRequired,
	onChangeWindows: PropTypes.func.isRequired
}
export default withStyles(styles)(Opening)
