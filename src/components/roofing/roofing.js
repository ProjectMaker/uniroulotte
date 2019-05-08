import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';

import RadioGroup from '../shared/form/radio-group'
import styles from './roofing-styles'

const Roofing = ({items, itemSelected, onChange}) => (
  <div>
    <RadioGroup items={items}
                itemChecked={itemSelected}
                direction={'vertical'}
                onClick={onChange}/>
  </div>
)

Roofing.defaultProps = {
  itemSelected: null
}

Roofing.propTypes = {
  items: PropTypes.array.isRequired,
  itemSelected: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Roofing)
