import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import {withStyles} from '@material-ui/core/styles'

const styles = {
	wrapper: {
		padding: '22px 10px',
	},

	windows: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	windowsSelector: {
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

	window: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start'
	},

	windowSelectorWrapper: {
		marginLeft: '102px',
	},

	windowSelector: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	windowLabel: {
		marginTop: '12px'
	},

	typeLabel: {
		cursor: 'pointer'
	}
}

class OpeningWindow extends Component {
	render() {
		return (
			<div>
				{this.renderWindowsSelector()}
				{this.renderWindow()}
			</div>
		)
	}

	renderWindowsSelector() {
		const {classes, windows} = this.props
		return (
			<div className={classes.windows}>
				<Typography>
					Nombre de fenêtres
				</Typography>
				<div className={classes.windowsSelector}>
					<div className={"icon"} onClick={() => this.handleAddWindow(-1)}>
						<RemoveIcon color={"secondary"} onClick={() => console.log('clic')}/>
					</div>
					<div className={"value"}>{windows.length}</div>
					<div className={"icon"} onClick={() => this.handleAddWindow(1)}>
						<AddIcon color={"primary"}/>
					</div>
				</div>
			</div>
		)
	}

	renderWindow() {
		const {windows, classes} = this.props
		return windows.map((window, idx) => {
			return (
				<div key={`door-${idx}`} className={classes.window}>
					<Typography classes={{root: classes.windowLabel}}>Fenêtre {idx + 1}</Typography>
					<div className={classes.windowSelectorWrapper}>
						<div className={classes.windowSelector}>
							<Radio checked={window.type === 'arch'}
										 onChange={() => this.handleChangeWindowType(idx, 'arch')}
							/>
							<Typography classes={{root: classes.typeLabel}}
													onClick={() => this.handleChangeWindowType(idx, 'arch')}>Cintrée</Typography>
							<Radio checked={window.type === 'rectangular'}
										 onChange={() => this.handleChangeWindowType(idx, 'rectangular')}
							/>
							<Typography classes={{root: classes.typeLabel}}
													onClick={() => this.handleChangeWindowType(idx, 'rectangular')}>Rectangulaire</Typography>
						</div>
						<div className={classes.windowSelector}>
							<Checkbox checked={window.shutter}
												tabIndex={-1}
												disableRipple
												onChange={() => this.handleChangeShutter(idx)}
							/>
							<Typography classes={{root: classes.typeLabel}}
													onClick={() => this.handleChangeShutter(idx)}>
								Avec volet
							</Typography>
						</div>
					</div>
				</div>
			)
		})
	}

	handleAddWindow(inc) {
		const {onChange} = this.props
		const windows = this.props.windows.slice()
		if (windows.length === 0 && inc < 0) {
			return
		}
		if (inc === -1) {
			windows.shift()
		} else {
			windows.push({type: 'arch', 'shutter': true})
		}
		onChange(windows)
	}

	handleChangeWindowType(idx, type) {
		const {onChange} = this.props
		const windows = this.props.windows.slice()
		windows[idx].type = type
		console.log(windows)
		onChange(windows)
	}

	handleChangeShutter(idx) {
		const {onChange} = this.props
		const windows = this.props.windows.slice()
		windows[idx].shutter = !windows[idx].shutter
		onChange(windows)
	}
}

OpeningWindow.propTypes = {
	windows: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}
export default withStyles(styles)(OpeningWindow)
