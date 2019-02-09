import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import NavBar from '../../../components/common/nav-bar'
import Surface from '../../../components/common/surface'
import Equipments from '../../../components/common/equipment'
import Opening from '../../../components/common/opening'
import Roofing from '../../../components/common/roofing'
import Basket from '../../../components/common/basket'
import Simulator from '../../../components/common/basket/simulator'
import Validation from '../../../components/common/validation'

const equipmentsAvailable = [
	{label: 'Chambre / Pièce de vie', value: 'bedroom'},
	{label: 'Chambre séparée', value: 'bedroomSepareted', canHaveDoor: true, door: false},
	{label: 'Salle de bain', value: 'bathroom', canHaveDoor: true, door: false},
	{label: 'Cuisine', value: 'kitchen', canHaveDoor: true, door: false},
	{label: 'Balcon', value: 'balcony'}
]

const roofingAvailable = [
	{label: 'Zinc à joint debout', value: 'zinc'},
	{label: 'Tôles cintrées type bac acier', value: 'tolecintree'},
	{label: 'Tôles plates galvanisées', value: 'tolegalva'}
]

const windowsAvailable = [
	{label: 'Cintrée', value: 'arch'},
	{label: 'Rectangulaire', value: 'rectangular'}
]

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
		const {area, equipments, door, windows, roofing, expanded} = this.state
		return (
			<div>
				<NavBar/>
				<div className={classes.root}>
					<Grid container spacing={24}>
						<Grid item xs={12} md={6}>
							<ExpansionPanel expanded={expanded === 'area'} onChange={() => this.handleExpandPanel('area')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography variant={"subtitle1"}>Superficie</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{width: '100%'}}>
										<Surface
											area={area}
											onChange={(area) => this.setState({area})}/>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel expanded={expanded === 'equipment'} onChange={() => this.handleExpandPanel('equipment')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography variant={"subtitle1"}>Equipements / Aménagements</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{width: '100%'}}>
										<Equipments
											items={equipmentsAvailable}
											itemsSelected={equipments}
											onChange={(items) => this.setState({equipments: items})}/>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel expanded={expanded === 'opening'} onChange={() => this.handleExpandPanel('opening')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography variant={"subtitle1"}>Ouvertures</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{width: '100%'}}>
										<Opening
											door={door}
											onChangeDoor={(door) => this.setState({door})}
											windows={windows}
											windowsAvailable={windowsAvailable}
											onChangeWindows={(windows) => this.setState({windows})}/>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel expanded={expanded === 'roofing'} onChange={() => this.handleExpandPanel('roofing')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography variant={"subtitle1"}>Toiture / Couverture</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{width: '100%'}}>
										<Roofing
											items={roofingAvailable}
											itemSelected={roofing}
											onChange={(item) => this.setState({roofing: item}) }/>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<div className={classes.validation}>
								<div style={{width: '100%'}}>
									<Validation />
								</div>
							</div>
						</Grid>
						<Grid item md={6}	>
							<Hidden only={'xs'}>
								<Basket
									area={area}
									equipments={equipments}
									door={door}
									windows={windows}
									roofing={roofing} />
								<Simulator
									area={area}
									equipments={equipments}
									door={door}
									windows={windows}
									roofing={roofing} />
							</Hidden>
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}

	handleExpandPanel(panel) {
		this.setState({expanded: panel})
	}
}

export default withStyles(styles)(Home)
