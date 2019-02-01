import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import Radio from './radio'

const styles = {
	horizontal: {
		display: 'flex',
		flexDirection: 'row',

		'& .radio': {
			marginRight: '25px'
		}
	},

	vertical: {
		display: 'flex',
		flexDirection: 'column',

		'& .radio': {
			marginTop: '20px'
		}
	}
}

class RadioGroup extends Component {
	render() {
		const {classes, items, direction} = this.props
		return (
			<div className={classes[direction]}>
				{items.map((item => this.renderRadio(item)))}
			</div>
		)
	}

	renderRadio(item) {
		const {onClick, itemChecked} = this.props

		return (
			<div className="radio" key={item.value}>
				<Radio
					label={item.label}
					checked={item.value === itemChecked.value}
					onClick={() => onClick(item)}
				/>
			</div>
		)
	}
}

RadioGroup.defaultProps = {
	direction: 'horizontal'
}

RadioGroup.propTypes = {
	items: PropTypes.array.isRequired,
	itemChecked: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	direction: PropTypes.string
}

export default withStyles(styles)(RadioGroup)
