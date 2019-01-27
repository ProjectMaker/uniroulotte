import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	item: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		cursor: 'pointer'
	},

	icon: {
		color: theme.palette.text.primary
	}
})

class Equipments extends Component {
	constructor (props) {
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
					{items.map((item, idx) => (
						<div key={`item-${idx}`} className={classes.item}>
							<Checkbox
								checked={itemsSelected.findIndex(_item => _item.name === item.name) > -1 ? true : false}
								tabIndex={-1}
								disableRipple
								onChange={() => this.handleCheck(item)}
							/>
							<div onClick={() => this.handleCheck(item)}>
								<Typography>
									{item.name}
								</Typography>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}

	handleCheck (item) {
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

