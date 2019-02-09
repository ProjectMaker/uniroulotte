import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconMenu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	appBar: {
		padding: '20px'
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		color: theme.palette.common.white
	},
	iconMenu: {
		cursor: 'pointer',
		color: theme.palette.common.white
	},
	links: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	link: {
		display: 'inline',
		color: theme.palette.common.white,
		marginRight: '20px',
		cursor: 'pointer',

		"&:last-child": {
			marginRight: 0
		},

		"& a": {
			textDecoration: 'none',
			color: theme.palette.common.white
		}
	}
})

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuExpanded: false
		}
	}

	render() {
		const {menuExpanded} = this.state
		const {classes} = this.props
		return (
			<AppBar position="static" classes={{root: classes.appBar}}>
				<div className={classes.toolbar}>
					<Typography variant="h6" color="inherit" classes={{root: classes.title}}>
						Simulateur
					</Typography>
					<IconMenu classes={{root: classes.iconMenu}} onClick={() => this.setState({menuExpanded: !menuExpanded})}/>
				</div>
				{menuExpanded ?
					(
						<div className={classes.links}>
							<ul>
								<li className={classes.link}><a href="https://www.uni-roulotte.fr">Home page</a></li>
								<li className={classes.link}><a href="https://www.uni-roulotte.fr/mes-roulottes-en-bois">Mes roulottes</a></li>
								<li className={classes.link}><a href="https://www.uni-roulotte.fr/mes-valeurs">Qui suis-je / Mes valeurs</a></li>
								<li className={classes.link}><a href="https://www.uni-roulotte.fr/me-contacter">Me contacter</a></li>
							</ul>
						</div>
					) : ''}
			</AppBar>
		)
	}
}

export default withStyles(styles)(NavBar)
