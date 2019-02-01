import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import Checkbox from './checkbox'

const styles = {
	horizontal: {
		display: 'flex',
		flexDirection: 'row',

		'& .checkbox': {
			marginRight: '25px'
		}
	},

	vertical: {
		display: 'flex',
		flexDirection: 'column',

		'& .checkbox': {
			marginTop: '20px'
		}
	}
}

class CheckboxGroup extends Component {
	render() {
		const {classes, items, direction} = this.props
		return (
			<div className={classes[direction]}>
				{items.map((item => this.renderRadio(item)))}
			</div>
		)
	}

	renderRadio(item) {
		const {onClick, itemsChecked} = this.props
		const isChecked = itemsChecked.findIndex(_item => _item.value === item.value) > -1 ? true : false
		return (
			<div className="checkbox" key={item.value}>
				<Checkbox
					label={item.label}
					checked={isChecked}
					onClick={() => onClick(item)}
				/>
			</div>
		)
	}
}

CheckboxGroup.defaultProps = {
	direction: 'horizontal'
}

CheckboxGroup.propTypes = {
	items: PropTypes.array.isRequired,
	itemsChecked: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	direction: PropTypes.string
}

export default withStyles(styles)(CheckboxGroup)
