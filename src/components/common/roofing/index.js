import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio';
import Typography from "@material-ui/core/Typography/Typography";
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

class Roofing extends Component {
	render() {
		const {items, itemSelected, classes} = this.props
		return (
			<div>
				<div>
					{items.map((item, idx) => (
						<div key={`item-${idx}`} className={classes.item}>
							<Radio
								checked={itemSelected.name === item.name ? true : false}
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
		onChange(item)
	}
}

Roofing.defaultProps = {
	itemSelected: null
}

Roofing.propTypes = {
	items: PropTypes.array.isRequired,
	itemSelected: PropTypes.object,
	onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Roofing)
