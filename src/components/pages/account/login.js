import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button/Button";
import {sendDemand} from "../../../assets/api/devis";

const styles = theme => ({
	card: {
		position: 'absolute',
		top: '40%',
		left: '50%'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	input: {
		height: '10px',
		fontSize: '12px'
	},
	label: {
		height: '10px',
		fontSize: '12px'
	},
	button: {
		marginTop: '20px',
		color: theme.palette.common.white
	}
})

class AccountLogin extends Component {
	constructor (props) {
		super(props)

		this.state = {
			email: {
				value: '',
				error: false
			},
			password: {
			value: '',
				error: false
			}
		}
	}

	render () {
		const {classes} = this.props
		const {email, password} = this.state
		return (
			<div className={classes.card}>
				<div className={classes.form}>
					<div>
						<TextField
							error={!!email.error}
							required
							id="email"
							label="Email"
							name="email"
							margin="normal"
							variant="outlined"
							onChange={(evt) => this.handleChange('email', evt.target.value)}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
						/>
					</div>
					<div>
						<TextField
							error={!!email.error}
							required
							id="password"
							label="Password"
							name="password"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.handleChange('password', evt.target.value)}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
							/>
					</div>
					<div>
						<Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleValid()}>
							Connexion
						</Button>
					</div>
				</div>
			</div>
		)
	}

	handleChange(key, value) {
		this.setState({[key]: {value, error: false}})
	}

	validateField(key) {
		const field = this.state[key]
		if (key === 'password') {
			if (!field.value.length) {
				this.setState({[key]: {value: field.value, error: true}})
				return false
			} else {
				this.setState({[key]: {value: field.value, error: false}})
				return true
			}
		} else if (key === 'email') {
			if (!this.validEmail(key)) {
				this.setState({email: {value: field.value, error: true}})
				return false
			} else {
				this.setState({email: {value: field.value, error: false}})
				return true
			}
		}
	}

	handleValid() {
		const {email, password} = this.state
		let isNotValid = !this.validateField('email')
			|| !this.validateField('password')

		if (!isNotValid) {
			this.setState({apiCalled: true})
			sendDemand(email.value, password.value)
				.then(res => this.props.history.push('/confirm'))
				.catch(err => this.setState({apiOnError: true}))
		}
	}

	validEmail(key) {
		const email = this.state[key]
		// eslint-disable-next-line
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email.value.toLowerCase());
	}
}


export default withStyles(styles)(AccountLogin)
