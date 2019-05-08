import React from 'react'
import PropTypes from 'prop-types'
import Hidden from "@material-ui/core/Hidden/Hidden"

import Basket from "../../../components/basket"

const Summary = ({area, equipments, door, windows, roofing}) => (
  <Hidden only={'xs'}>
    <Basket
      area={area}
      equipments={equipments}
      door={door}
      windows={windows}
      roofing={roofing}/>
  </Hidden>
)

Summary.propTypes = {
  area: PropTypes.object.isRequired,
  equipments: PropTypes.array.isRequired,
  door: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired,
  roofing: PropTypes.object.isRequired
}

export default Summary
