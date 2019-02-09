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
			marginTop: '10px'
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
			email: '',
			emailError: false,
			firstname: '',
			firstnameError: false,
			lastname: '',
			lastnameError: true
		}
	}

	render () {
		const {classes} = this.props
		const {emailError, lastnameError, firstnameError} = this.state
		return (
			<div>
				<Typography>Veuillez remplir les champs ci-dessous afin de recevoir votre devis</Typography>
				<div className={classes.fields}>
					<div className={classes.field}>
						<TextField
							error={lastnameError}
							required
							id="lastname"
							label="Nom"
							name="lastname"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({lastname: evt.target.value})}
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
					<div className={classes.field}>
						<TextField
							error={firstnameError}
							required
							id="firstname"
							label="Prénom"
							name="firtsname"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({firstname: evt.target.value})}
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
				</div>
				<div className={classes.fields}>
					<div className={classes.field}>
						<TextField
							error={emailError}
							required
							id="email"
							label="Email"
							type="email"
							name="email"
							autoComplete="email"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({email: evt.target.value})}
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
					<div className={classes.field}>
						<TextField
							error={emailError}
							required
							id="emailConfirm"
							label="Confirmation email"
							type="email"
							name="emailConfirm"
							autoComplete="email"
							margin="none"
							variant="outlined"
							onChange={(evt) => this.setState({email: evt.target.value})}
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
		console.log('handleValid')
	}
}

export default withStyles(styles)(Validation)
