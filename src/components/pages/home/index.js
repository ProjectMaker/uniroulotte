import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-flexbox-grid';

import NavBar from '../../../components/common/nav-bar'
import Validation from '../../../components/common/validation'
import Sidebar from './sidebar'
import Panels from './panels'

const styles = {
	grid: {
		margin: '20px'
	},
	sidebar: {
		paddingLeft: '40px'
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
				<Grid className={classes.grid}>
					<Row around={"md"}>
						<Col xs={12} md={8}>
							<Row>
								<Col xs={12} md={8}>
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
											<Validation/>
										</div>
									</div>
								</Col>
								<Col md={4} className={classes.sidebar}>
									<Sidebar
										area={area}
										equipments={equipments}
										door={door}
										windows={windows}
										roofing={roofing}/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(Home)
