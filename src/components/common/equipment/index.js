import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	checkbox: {
		padding: 0
	},
	radio: {
		padding: 0
	},
	itemName: {
		marginTop: '4px',
		marginLeft: '15px'
	},
	itemWindow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		cursor: 'pointer',
		marginBottom: '10px'
	},
	itemDoor: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		cursor: 'pointer',
		marginLeft: '12px',
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
				<div>
					{items.map((item, idx) => {
						const isSelected = itemsSelected.findIndex(_item => _item.name === item.name) > -1 ? true : false
						return (
							<Grid item xs={12} key={`item-${idx}`}>
								<div className={classes.itemWindow}>
									<Checkbox
										classes={{root: classes.checkbox}}
										checked={isSelected}
										tabIndex={-1}
										disableRipple
										onChange={() => this.handleCheck(item)}
									/>
									<div>
										<Typography classes={{root: classes.itemName}} onClick={() => this.handleCheck(item)}>
											{item.name}
										</Typography>
										{isSelected && item.canHaveDoor ? this.renderDoor(item) : null}
									</div>
								</div>
							</Grid>
						)
					})}
				</div>
			</div>
		)
	}

	renderDoor(item) {
		const {classes} = this.props
		return (
			<div className={classes.itemDoor}>
				<Checkbox
					classes={{root: classes.checkbox}}
					checked={item.door}
					tabIndex={-1}
					disableRipple
					onChange={() => this.handleCheckDoor(item)}
				/>
				<Typography classes={{root: classes.itemName}} onClick={() => this.handleCheckDoor(item)}>
					Avec porte
				</Typography>
			</div>
		)
	}

	handleCheckDoor(item) {
		const {onChange} = this.props
		const itemsSelected = this.props.itemsSelected.slice()
		const idx = itemsSelected.findIndex(_item => _item.name === item.name)
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
		const idx = itemsSelected.findIndex(_item => _item.name === item.name)
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

