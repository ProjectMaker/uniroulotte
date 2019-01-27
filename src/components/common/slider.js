import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MaterialSlider from '@material-ui/lab/Slider'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss/lib/injectSheet';

const styles = {
	wrapper: {
		padding: '22px 10px',
	},
	footer: {
		marginTop: '20px',
		display: 'flex',
		flexDirection: 'row',

		'& .value': {
			flexGrow: 1,
			textAlign: 'center'
		}
	}
}

class Slider extends Component {
	render() {
		const {classes, min, max, step, unit, value} = this.props
		return (
			<div className={classes.wrapper}>
				{this.renderLabel()}
				<MaterialSlider
					value={value}
					min={min}
					max={max}
					step={step}
					aria-labelledby="label"
					onChange={(event, value) => this.handleChange(event, value)}
				/>
				<div className={classes.footer}>
					<div>{min}</div>
					<div className={"value"}>{`${value.toLocaleString()} ${unit}`}</div>
					<div>{max}</div>
				</div>
			</div>
		)
	}

	renderLabel () {
		const {label} = this.props
		if (label.length) {
			return (
				<Typography variant={"body1"} gutterBottom>
					{label}
				</Typography>
			)
		}
	}

	handleChange(event, value) {
		const {onChange} = this.props
		onChange(value)
	}
}

Slider.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	label: '',
	unit: 'm²',
	value: 0,
	onChange: () => {}
}

Slider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	unit: PropTypes.string,
	value: PropTypes.number,
	label: PropTypes.string,
	onChange: PropTypes.func
}
export default injectSheet(styles)(Slider)
