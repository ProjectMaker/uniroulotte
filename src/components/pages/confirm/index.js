import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
	},
});

class Confirm extends Component {
	render () {
		const {classes} = this.props
		return (
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
				<Paper elevation={1} className={classes.root}>
					<Typography variant={"subtitle1"}>Vous allez recevoir un devis dans les prochaines minutes</Typography>
				</Paper>
			</div>
		)
	}
}


export default withStyles(styles)(Confirm)
