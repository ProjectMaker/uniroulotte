import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'

import NavBar from '../../../components/common/nav-bar'
import Surface from '../../../components/common/surface'
import Equipments from '../../../components/common/equipment'
import Opening from '../../../components/common/opening'
import Roofing from '../../../components/common/roofing'
import Basket from '../../../components/common/basket'

const equipmentsAvailable = [
	{name: 'Chambre / Pièce de vie'},
	{name: 'Salle de bain'},
	{name: 'Cuisine'},
	{name: 'Balcon'}
]

const roofingAvailable = [
	{name: 'Zinc à joint debout'},
	{name: 'Tôles cintrées type bac acier'},
	{name: 'Tôles plates galvanisées'}
]

const styles = {
	root: {
		margin: '20px'
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
			doors: [],
			windows: [],
			roofing: {
				name: 'Zinc à joint debout'
			}
		}
	}

	render() {
		const {classes} = this.props
		const {area, equipments, doors, windows, roofing, expanded} = this.state
		return (
			<div>
				<NavBar/>
				<div className={classes.root}>
					<Grid container spacing={24}>
						<Grid item xs={9}>
							<ExpansionPanel expanded={expanded === 'area'} onChange={() => this.handleExpandPanel('area')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography>Superficie</Typography>
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
									<Typography>Equipements / Aménagements</Typography>
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
									<Typography>Ouvertures</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div style={{width: '100%'}}>
										<Opening
											doors={doors}
											onChangeDoors={(doors) => this.setState({doors})}
											windows={windows}
											onChangeWindows={(windows) => this.setState({windows})}/>
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel expanded={expanded === 'roofing'} onChange={() => this.handleExpandPanel('roofing')}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
									<Typography>Toiture / Couverture</Typography>
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
						</Grid>
						<Grid item xs={3}>
							<div>
								<Basket
									area={area}
									equipments={equipments}
									doors={doors}
									windows={windows}
									roofing={roofing} />
							</div>
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
