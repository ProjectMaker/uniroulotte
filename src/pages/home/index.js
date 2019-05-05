import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-flexbox-grid';

import ShippingForm from '../../components/shipping-form'
import Sidebar from './sidebar'
import Panels from './panels'

import {
  calculatePrice, sendDemand
} from "../../api/quotation"
import ModalError from "../../components/shared/modal-error";

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
  state = {
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
      label: 'Tôles plates galvanisées',
      value: 'tolegalva'
    },
    price: 0,
    sendingInProgress: false,
    sendingInError: false
  }

  handleChangeQuotation = (item, value) => {
    this.setState(
      () => ({[item]: value}),
      () => {
        const price = calculatePrice({...this.state})
        this.setState({price})
      }
    )
  }

  sendQuotation = (firstname, lastname, email, phoneNumber) => {
    const {area, equipments, windows, door, roofing, price} = this.state
    const detail = {area, equipments, windows, door, roofing}
    this.setState({sendingInProgress: true})
    sendDemand(email, firstname, lastname, phoneNumber, price.toLocaleString(), detail)
      .then(res => {
        this.setState(
          () => ({sendingInError: false, sendingInProgress: false}),
          () => this.props.history.push('/confirm')
        )
      })
      .catch(err => this.setState({sendingInError: true, sendingInProgress: false}))
  }

  componentDidMount() {
    const price = calculatePrice({...this.state})
    this.setState({price})
  }

  render() {
    const {classes} = this.props
    const {area, equipments, door, windows, roofing, sendingInProgress, sendingInError} = this.state
    return (
      <Grid className={classes.grid}>
        <Row around={"md"}>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={9}>
                <Panels
                  area={area}
                  onChangeArea={(area) => this.handleChangeQuotation('area', area)}
                  equipments={equipments}
                  onChangeEquipments={(equipments) => this.handleChangeQuotation('equipments', equipments)}
                  windows={windows}
                  onChangeWindows={(windows) => this.handleChangeQuotation('windows', windows)}
                  door={door}
                  onChangeDoor={(door) => this.handleChangeQuotation('door', door)}
                  roofing={roofing}
                  onChangeRoofing={(roofing) => this.handleChangeQuotation('roofing', roofing)}/>
                <div className={classes.validation}>
                  <div style={{width: '100%'}}>
                    <ModalError
                      open={sendingInError}
                      onClose={() => this.setState({sendingInError: false})}
                      description="Un problème est survenu ...."
                    />
                    <ShippingForm
                      onSubmit={this.sendQuotation}
                      sendingInProgress={sendingInProgress}
                      sendingInError={sendingInError}
                    />
                  </div>
                </div>
              </Col>
              <Col md={3} className={classes.sidebar}>
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
    )
  }
}

export default withRouter(withStyles(styles)(Home))
