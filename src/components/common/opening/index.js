import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import OpeningWindow from './window'
import OpeningDoor from './door'

class Opening extends Component {
	render() {
		const {doors, windows} = this.props
		return (
			<div>
				<Grid container spacing={8}>
					<Grid item xs={6}>
						<OpeningDoor doors={doors} onChange={(doors) => this.handleChangeDoors(doors)}/>
					</Grid>
					<Grid item xs={6}>
						<OpeningWindow windows={windows} onChange={(windows) => this.handleChangeWindows(windows)}/>
					</Grid>
				</Grid>
			</div>
		)
	}

	handleChangeDoors(doors) {
		const {onChangeDoors} = this.props
		onChangeDoors(doors)
	}

	handleChangeWindows(windows) {
		const {onChangeWindows} = this.props
		onChangeWindows(windows)
	}
}

Opening.propTypes = {
	doors: PropTypes.array.isRequired,
	windows: PropTypes.array.isRequired,
	onChangeDoors: PropTypes.func.isRequired,
	onChangeWindows: PropTypes.func.isRequired
}
export default Opening
