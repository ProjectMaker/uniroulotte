import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import CheckboxGroup from '../form/checkbox-group'

const styles = theme => ({
  equipment: {
    marginBottom: '20px'
  },
  door: {
    marginLeft: '31px',
    marginTop: '5px'

  },
  icon: {
    color: theme.palette.text.primary
  }
})

class Equipments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsSelected: []
    }
  }

  render() {
    const {items, itemsSelected} = this.props
    return (
      <CheckboxGroup items={items}
                     itemsChecked={itemsSelected}
                     direction={'vertical'}
                     onClick={(item) => this.handleCheck(item)}/>
    )
  }

  handleCheck(item) {
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
}

Equipments.defaultProps = {
  itemsSelected: []
}

Equipments.propTypes = {
  items: PropTypes.array.isRequired,
  itemsSelected: PropTypes.array,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Equipments)

