import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MaterialRadio from '@material-ui/core/Radio'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	radio: {
		padding: '0 10px 0 0'
	},
	label: {
		cursor: 'pointer'
	}
}
class Radio extends Component {
	render () {
		const {classes, label, checked} = this.props
		return (
			<div className={classes.root}>
				<MaterialRadio classes={{root: classes.radio}}
							 checked={checked}
							 tabIndex={-1}
							 disableRipple
							 onChange={() => this.handleClick()}
				/>
				<Typography classes={{root: classes.label}} onClick={() => this.handleClick()}>{label}</Typography>
			</div>
		)
	}

	handleClick() {
		const {onClick} = this.props
		onClick()
	}
}

Radio.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(Radio)
