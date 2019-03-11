import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Slider from '../slider'

class Surface extends Component {
  render() {
    const {area: {largeur, longueur}} = this.props
    return (
      <div>
        <Slider min={2} max={3} step={0.1} value={largeur} unit={'m'} label={"Largeur"}
                onChange={(value) => this.handleChangeLargeur(value)}/>
        <Slider min={4} max={9} step={0.1} value={longueur} unit={'m'} label={"Longueur"}
                onChange={(value) => this.handleChangeLongueur(value)}/>
      </div>
    )
  }

  handleChangeLargeur(largeur) {
    const {onChange, area: {longueur}} = this.props
    onChange({largeur, longueur})
  }

  handleChangeLongueur(longueur) {
    const {onChange, area: {largeur}} = this.props
    onChange({largeur, longueur})
  }
}

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
