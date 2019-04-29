import React, {Component} from 'react'

import PropTypes from 'prop-types'
import MaterialCheckbox from '@material-ui/core/Checkbox'
import Typography from "@material-ui/core/Typography/Typography"
import {withStyles} from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    padding: '0 10px 0 0'
  },
  label: {
    cursor: 'pointer'
  }
}

class Checkbox extends Component {
  render() {
    const {classes, label, checked} = this.props
    return (
      <div className={classes.root}>
        <MaterialCheckbox classes={{root: classes.checkbox}}
                          checked={checked}
                          onChange={() => this.handleClick()}
        />
        <Typography classes={{root: classes.label}} onClick={() => this.handleClick()}>{label}</Typography>
      </div>
    )
  }

  handleClick() {
    const {onClick} = this.props
    onClick()
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(Checkbox)
