import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles';

import RadioGroup from '../form/radio-group'

const styles = theme => ({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer'
  },

  icon: {
    color: theme.palette.text.primary
  }
})

class Roofing extends Component {
  render() {
    const {items, itemSelected} = this.props
    return (
      <div>
        <RadioGroup items={items}
                    itemChecked={itemSelected}
                    direction={'vertical'}
                    onClick={(item) => this.handleCheck(item)}/>
      </div>
    )
  }

  handleCheck(item) {
    const {onChange} = this.props
    onChange(item)
  }
}

Roofing.defaultProps = {
  itemSelected: null
}

Roofing.propTypes = {
  items: PropTypes.array.isRequired,
  itemSelected: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(Roofing)
