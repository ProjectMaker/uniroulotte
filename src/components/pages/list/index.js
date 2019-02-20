import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'

import { list } from "../../../assets/api/devis"

const styles = theme => ({
	wrapper: {
		display: 'flex',
		margin: theme.spacing.unit * 3
	},
	root: {
		width: '100%',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
})

class DevisList extends Component {
	constructor (props) {
		super(props)

		this.state = {
			devis: [],
			selectedDevis: null
		}
	}

	componentDidMount () {
		list()
			.then(devis => this.setState({devis}))
	}

	toggleDrawer(side, open) {
		this.setState({
			[side]: open,
		})
	}

	render () {
		const {classes} = this.props
		const {devis} = this.state
		return (
			<div className={classes.wrapper}>
				<Drawer open={this.state.right} >
					<div
						tabIndex={0}
						role="button"
						onClick={() => this.toggleDrawer('left', false)}
						onKeyDown={() => this.toggleDrawer('left', false)}
					>
						{this.renderSideBar()}
					</div>
				</Drawer>
				<Paper className={classes.root}>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell>Email</TableCell>
								<TableCell>Nom</TableCell>
								<TableCell>Prénom</TableCell>
								<TableCell>Prix</TableCell>
								<TableCell>Date</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{devis.map((_devis, i) => (
								<React.Fragment key={`${_devis._id}`}>
									<TableRow>
										<TableCell onClick={() => this.setState({selectedDevis: _devis._id})}>{_devis.email}</TableCell>
										<TableCell>{_devis.firstname}</TableCell>
										<TableCell>{_devis.lastname}</TableCell>
										<TableCell>{_devis.price}</TableCell>
										<TableCell>{moment(_devis.createdAt).format('YYYY/MM/DD')}</TableCell>
									</TableRow>
									{this.state.selectedDevis === _devis._id ?
										<TableRow>
											<TableCell colSpan={5}>{_devis.email}</TableCell>
										</TableRow>
									: null}
								</React.Fragment>
							))}
						</TableBody>
					</Table>
				</Paper>
			</div>
		)
	}

	renderSideBar () {
		return (
			<h3>YOYOYO</h3>
		)
	}
}


export default withStyles(styles)(DevisList)
