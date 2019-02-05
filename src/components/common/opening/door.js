import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'

import RadioGroup from '../form/radio-group'

const styles = theme => ({
	door: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		[theme.breakpoints.down('xs')]: {
			alignItems: 'flex-start',
			flexDirection: 'column',
		}
	},

	doorSelector: {
		[theme.breakpoints.up('xs')]: {
			marginLeft: '154px'
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0
		}
	}
})

const radioDoors = [
	{
		label: 'Pleine',
		value: 'full'
	}, {
		label: 'Semi vitrée',
		value: 'semiGlazed'
	}, {
		label: 'Grand jour',
		value: 'glazed'
	}
]

class OpeningDoor extends Component {
	constructor(props) {
		super(props)

		this.state = {
			itemChecked: radioDoors[0]
		}
	}

	componentWillMount() {
		this.setState({itemChecked: radioDoors.find(door => door.value === this.props.door.type)})
	}

	render() {
		const {classes, width} = this.props
		const {itemChecked} = this.state
		return (
			<div className={classes.door}>
				<Typography>
					Porte d'entrée
				</Typography>
				<div className={classes.doorSelector}>
					<RadioGroup key="radio-group-door"
											direction={width === 'xs' ? 'vertical' : 'horizontal'}
											items={radioDoors}
											itemChecked={itemChecked}
											onClick={(item) => this.handleChangeDoorType(item.value)}/>
				</div>
			</div>
		)
	}

	handleChangeDoorType(type) {
		const {onChange, door} = this.props
		door.type = type
		onChange(door)
		this.setState({itemChecked: radioDoors.find(door => door.value === type)})
	}
}

OpeningDoor.propTypes = {
	door: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

export default compose(
	withWidth(),
	withStyles(styles)
)(OpeningDoor)
