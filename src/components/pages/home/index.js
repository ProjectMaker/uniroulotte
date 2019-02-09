import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import NavBar from '../../../components/common/nav-bar'
import Validation from '../../../components/common/validation'
import Sidebar from './sidebar'
import Panels from './panels'

const styles = {
	root: {
		margin: '20px'
	},
	validation: {
		marginTop: '40px'
	}
}

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: 'area',
			area: {
				largeur: 2,
				longueur: 4
			},
			equipments: [],
			door: {
				type: 'full'
			},
			windows: [],
			roofing: {
				label: 'Zinc à joint debout',
				value: 'zinc'
			}
		}
	}

	render() {
		const {classes} = this.props
		const {area, equipments, door, windows, roofing} = this.state
		return (
			<div>
				<NavBar/>
				<div className={classes.root}>
					<Grid container spacing={24}>
						<Grid item xs={12} md={6}>
							<Panels
								area={area}
								onChangeArea={(area) => this.setState({area})}
								equipments={equipments}
								onChangeEquipments={(equipments) => this.setState({equipments})}
								windows={windows}
								onChangeWindows={(windows) => this.setState({windows})}
								door={door}
								onChangeDoor={(door) => this.setState({door})}
								roofing={roofing}
								onChangeRoofing={(roofing) => this.setState({roofing})}/>
							<div className={classes.validation}>
								<div style={{width: '100%'}}>
									<Validation />
								</div>
							</div>
						</Grid>
						<Grid item md={6}	>
							<Sidebar
								area={area}
								equipments={equipments}
								door={door}
								windows={windows}
								roofing={roofing} />
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Home)
