import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
	fields: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '20px',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},

	field: {
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
	render () {
		const {classes} = this.props
		return (
			<div>
				<Typography>Veuillez remplir les champs ci-dessous afin de recevoir votre devis</Typography>
				<div className={classes.fields}>
					<div className={classes.field}>
						<TextField
							required
							id="email"
							label="Email"
							type="email"
							name="email"
							autoComplete="email"
							margin="none"
							variant="outlined"
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
					<div className={classes.field}>
						<TextField
							required
							id="lastname"
							label="Nom"
							name="lastname"
							margin="none"
							variant="outlined"
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
					<div className={classes.field}>
						<TextField
							required
							id="firstname"
							label="Prénom"
							name="firtsname"
							margin="none"
							variant="outlined"
							InputProps={{ classes: { input: classes.input } }}
							InputLabelProps={{ classes: { root: classes.label } }}
						/>
					</div>
				</div>
				<Button variant="contained" color="primary" className={classes.button}>
					Envoyer la demande de devis
				</Button>
			</div>
		)
	}
}

export default withStyles(styles)(Validation)
