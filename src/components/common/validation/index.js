import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography/Typography"
import { withRouter } from 'react-router-dom'
import { sendDemand } from "../../../assets/api/devis"
import ModalError from "./modal"

const styles = theme => ({
	fields: {
		display: 'flex',
		marginTop: '20px',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},

	field: {
		marginLeft: '10px',
		"&:first-child": {
			marginLeft: 0
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '10px',
			marginLeft: 0
		}

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
	},
	error: {
		color: '#ba000d'
	}
})

class Validation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: {
				value: '',
				error: false
			},
			emailConfirm: {
				value: '',
				error: false
			},
			firstname: {
				value: '',
				error: false
			},
			lastname: {
				value: '',
				error: false
			},
			apiOnError: false,
			apiCalled: false
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const {firstname, lastname, email, emailConfirm} = this.state
		if (firstname.value !== prevState.firstname.value) {
			this.handleValidField('firstname')
		}
		if (lastname.value !== prevState.lastname.value) {
			this.handleValidField('lastname')
		}
		if (email.value !== prevState.email.value) {
			this.handleValidField('email')
		}
		if (emailConfirm.value !== prevState.emailConfirm.value) {
			this.handleValidField('emailConfirm')
		}
	}

	render() {
		const {classes} = this.props
		const {email, emailConfirm, lastname, firstname, apiCalled} = this.state
		return (
			<div>
				<ModalError open={this.state.apiOnError} onClose={() => this.setState({apiOnError: false})}/>
				<Typography>Veuillez remplir les champs ci-dessous afin de recevoir votre devis</Typography>
				<div className={classes.fields}>
					<div className={classes.field}>
						<TextField
							error={!!lastname.error}
							required
							id="lastname"
							label="Nom"
							name="lastname"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.handleChange('lastname', evt.target.value)}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
						/>
						{lastname.error ?
							<Typography variant={"caption"} classes={{root: classes.error}}>Le nom est obligatoire</Typography> : ''}
					</div>
					<div className={classes.field}>
						<TextField
							error={!!firstname.error}
							required
							id="firstname"
							label="Prénom"
							name="firtsname"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({firstname: {value: evt.target.value}})}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
						/>
						{firstname.error ? <Typography variant={"caption"} classes={{root: classes.error}}>Le prénom est
							obligatoire</Typography> : ''}
					</div>
				</div>
				<div className={classes.fields}>
					<div className={classes.field}>
						<TextField
							error={!!email.error}
							required
							id="email"
							label="Email"
							type="email"
							name="email"
							autoComplete="email"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({email: {value: evt.target.value}})}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
						/>
						{email.error ? <Typography variant={"caption"} classes={{root: classes.error}}>L'email n'est pas
							correct</Typography> : ''}
					</div>
					<div className={classes.field}>
						<TextField
							required
							id="emailConfirm"
							label="Confirmation email"
							type="email"
							name="emailConfirm"
							autoComplete="email"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({emailConfirm: {value: evt.target.value}})}
							InputProps={{classes: {input: classes.input}}}
							InputLabelProps={{classes: {root: classes.label}}}
						/>
						{emailConfirm.error ? <Typography variant={"caption"} classes={{root: classes.error}}>Les emails sont
							différents</Typography> : ''}
					</div>
				</div>
				{!apiCalled ?
					<Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleValid()}>
						Envoyer la demande de devis
					</Button>
				: <Button variant="contained" color="primary" disabled className={classes.button}>
						Envoi en cours ...
					</Button>}
			</div>
		)
	}

	handleChange(key, value) {
		this.setState({[key]: {value, error: false}})
	}

	handleValidField(key) {
		const field = this.state[key]
		if (['firstname', 'lastname'].includes(key)) {
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
		const {lastname, firstname, email, emailConfirm} = this.state
		const {area, equipments, windows, door, roofing} = this.props
		const detail = { area, equipments, windows, door, roofing }
		let isNotValid = !this.handleValidField('lastname')
			|| !this.handleValidField('firstname')
			|| !this.handleValidField('email')

		if (email.value !== emailConfirm.value) {
			this.setState({emailConfirm: {value: emailConfirm.value, error: true}})
			isNotValid = true
		}
		if (!isNotValid) {
			this.setState({apiCalled: true})
			sendDemand(email.value, firstname.value, lastname.value, this.props.price.toLocaleString(), detail)
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

Validation.propTypes = {
	price: PropTypes.number.isRequired,
	area: PropTypes.object.isRequired,
	equipments: PropTypes.array.isRequired,
	windows: PropTypes.array.isRequired,
	door: PropTypes.object.isRequired,
	roofing: PropTypes.object.isRequired
}
export default withRouter(withStyles(styles)(Validation))
