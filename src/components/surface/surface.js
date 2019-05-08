import React from 'react'
import PropTypes from 'prop-types'

import Slider from '../shared/slider'

const Surface = ({area: {largeur, longueur}, onChange}) => (
  <div>
    <Slider min={2} max={3} step={0.1} value={largeur} unit={'m'} label={"Largeur"}
            onChange={(value) => onChange({largeur: value, longueur})}/>
    <Slider min={4} max={9} step={0.1} value={longueur} unit={'m'} label={"Longueur"}
            onChange={(value) => onChange({largeur, longueur: value})}/>
  </div>
)

Surface.defaultProps = {
  area: {
    largeur: 2,
    longueur: 4
  }
}

Surface.propTypes = {
  area: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

export default Surface
