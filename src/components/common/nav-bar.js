import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	title: {
		color: theme.palette.common.white
	}
})

const NavBar = ({classes}) => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit" classes={{root: classes.title}}>
						Uniroulotte Simulator
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default withStyles(styles)(NavBar)
