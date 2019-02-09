import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography/Typography";

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
			}
		}
	}

	render () {
		const {classes} = this.props
		const {email, lastname, firstname} = this.state
		return (
			<div>
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
							onChange={(evt) => this.setState({lastname: {value: evt.target.value}})}
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
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
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
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
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
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
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
				</div>
				<Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleValid()}>
					Envoyer la demande de devis
				</Button>
			</div>
		)
	}

	handleValid() {
		/*
		const {email, emailConfirm} = this.state
		if (email !== emailConfirm) {
			this.setState({email: {value: email.value, error: true}})
		}
		*/
	}
}

export default withStyles(styles)(Validation)
