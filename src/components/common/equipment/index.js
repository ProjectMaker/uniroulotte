import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import Checkbox from '../form/checkbox'

const styles = theme => ({
	equipment: {
		marginBottom: '20px'
	},
	door: {
		marginLeft: '31px',
		marginTop: '5px'

	},
	icon: {
		color: theme.palette.text.primary
	}
})

class Equipments extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemsSelected: []
		}
	}

	render() {
		const {items, itemsSelected, classes} = this.props
		return (
			<div>
				{items.map((item) => {
					const isSelected = itemsSelected.findIndex(_item => _item.value === item.value) > -1 ? true : false
					return (
						<div key={item.value} className={classes.equipment}>
							<Checkbox
								label={item.label}
								checked={isSelected}
								onClick={() => this.handleCheck(item)}
							/>
							{isSelected && item.canHaveDoor ? this.renderDoor(item) : null}
						</div>
					)
				})}
			</div>
		)
	}

	renderDoor(item) {
		const {classes} = this.props
		return (
			<div className={classes.door}>
				<Checkbox
					label="Avec porte"
					checked={item.door}
					onClick={() => this.handleCheckDoor(item)}
				/>
			</div>
		)
	}

	handleCheckDoor(item) {
		const {onChange} = this.props
		const itemsSelected = this.props.itemsSelected.slice()
		const idx = itemsSelected.findIndex(_item => _item.value === item.value)
		if (item.canHaveDoor) {
			item.door = !item.door
			if (item.door) {
				item.doorType = 'arch'
			}
		}
		itemsSelected[idx] = item
		onChange(itemsSelected)
	}

	handleCheck(item) {
		const {onChange} = this.props
		const itemsSelected = this.props.itemsSelected.slice()
		const idx = itemsSelected.findIndex(_item => _item.value === item.value)
		if (idx > -1) {
			itemsSelected.splice(idx, 1)
		} else {
			itemsSelected.push(item)
		}
		onChange(itemsSelected)
	}
}

Equipments.defaultProps = {
	itemsSelected: []
}

Equipments.propTypes = {
	items: PropTypes.array.isRequired,
	itemsSelected: PropTypes.array,
	onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Equipments)

