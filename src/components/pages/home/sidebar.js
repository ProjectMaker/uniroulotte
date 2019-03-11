import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Basket from "../../common/basket";
import Hidden from "@material-ui/core/Hidden/Hidden";

class Sidebar extends Component {
  render() {
    const {area, equipments, door, windows, roofing} = this.props
    return (
      <Hidden only={'xs'}>
        <Basket
          area={area}
          equipments={equipments}
          door={door}
          windows={windows}
          roofing={roofing}/>
      </Hidden>
    )
  }
}

Sidebar.propTypes = {
  area: PropTypes.object.isRequired,
  equipments: PropTypes.array.isRequired,
  door: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired,
  roofing: PropTypes.object.isRequired
}

export default Sidebar
