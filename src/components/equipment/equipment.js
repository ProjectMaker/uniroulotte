import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import CheckboxGroup from '../shared/form/checkbox-group'
import styles from './equipment-styles'

class Equipments extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    itemsSelected: PropTypes.array,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    itemsSelected: []
  }

  state = {
    itemsSelected: []
  }

  handleCheck = (item) => {
    const {onChange} = this.props
    const itemsSelected = this.props.itemsSelected.slice()
    const idx = itemsSelected.findIndex(_item => _item.value === item.value)
    if (idx > -1) {
      itemsSelected.splice(idx, 1)
    } else {
      itemsSelected.push(item)
    }
    onChange(itemsSelected)
  }

  render() {
    const {items, itemsSelected} = this.props
    return (
      <CheckboxGroup items={items}
                     itemsChecked={itemsSelected}
                     direction={'vertical'}
                     onClick={this.handleCheck}/>
    )
  }
}

export default withStyles(styles)(Equipments)

