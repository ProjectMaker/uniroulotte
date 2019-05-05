import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {Grid, Row, Col} from 'react-flexbox-grid';

import Validation from '../../components/shipping-form'
import Sidebar from './sidebar'
import Panels from './panels'

import {
  calculateArea,
  calculateBalcony,
  calculateBedroom,
  calculateEntryDoor,
  calculateRoofing,
  calculateRoomWater,
  calculateShutter,
  calculateWindow
} from "../../api/quotation"

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
      hasChange: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasChange) {
      this.calculatePrice()
    }
  }

  componentDidMount() {
    this.calculatePrice()
  }

  render() {
    const {classes} = this.props
    const {area, equipments, door, windows, roofing, price} = this.state
    return (
      <Grid className={classes.grid}>
        <Row around={"md"}>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={9}>
                <Panels
                  area={area}
                  onChangeArea={(area) => this.handleChange('area', area)}
                  equipments={equipments}
                  onChangeEquipments={(equipments) => this.handleChange('equipments', equipments)}
                  windows={windows}
                  onChangeWindows={(windows) => this.handleChange('windows', windows)}
                  door={door}
                  onChangeDoor={(door) => this.handleChange('door', door)}
                  roofing={roofing}
                  onChangeRoofing={(roofing) => this.handleChange('roofing', roofing)}/>
                <div className={classes.validation}>
                  <div style={{width: '100%'}}>
                    <Validation
                      price={price}
                      area={area}
                      equipments={equipments}
                      door={door}
                      windows={windows}
                      roofing={roofing}/>
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

  calculatePrice() {
    const area = calculateArea(this.state.area)
    const roomWater = calculateRoomWater(this.state.equipments)
    const bedroom = calculateBedroom(this.state.equipments)
    const window = calculateWindow(this.state.windows)
    const entryDoor = calculateEntryDoor(this.state.door)
    const shutter = calculateShutter(this.state.windows)
    const balcony = calculateBalcony(this.state.equipments)
    const roofing = calculateRoofing(this.state.roofing, this.state.area)
    const price = area + roomWater + window + entryDoor + shutter + balcony + roofing + bedroom
    this.setState({price, hasChange: false})
  }

  handleChange(item, value) {
    this.setState({[item]: value, hasChange: true})
  }
}

export default withStyles(styles)(Home)
