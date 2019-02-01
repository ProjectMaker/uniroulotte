import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import OpeningWindow from './window'
import OpeningDoor from './door'

const styles = {
	door: {
		marginTop: '3px'
	},
	windows: {
		marginTop: '30px'
	}
}

class Opening extends Component {
	render() {
		const {classes, door, windows, windowsAvailable} = this.props
		return (
			<div>
				<div className={classes.door}>
					<OpeningDoor door={door} onChange={(door) => this.handleChangeDoor(door)}/>
				</div>
				<div className={classes.windows}>
					<OpeningWindow windows={windows} windowsAvailable={windowsAvailable} onChange={(windows) => this.handleChangeWindows(windows)}/>
				</div>
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
	windowsAvailable: PropTypes.array.isRequired,
	onChangeDoor: PropTypes.func.isRequired,
	onChangeWindows: PropTypes.func.isRequired
}
export default withStyles(styles)(Opening)
