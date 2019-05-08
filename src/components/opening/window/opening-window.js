import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography/Typography";
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import {withStyles} from '@material-ui/core/styles'

import RadioGroup from '../../shared/form/radio-group'
import Checkbox from '../../shared/form/checkbox'
import styles from './opening-window-styles'

class OpeningWindow extends Component {
  static propTypes = {
    windows: PropTypes.array.isRequired,
    windowsAvailable: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleAddWindow = (inc) => {
    const {onChange} = this.props
    const windows = this.props.windows.slice()
    if (windows.length === 0 && inc < 0) {
      return
    }
    if (inc === -1) {
      windows.shift()
    } else {
      windows.push({type: 'rectangular', 'shutter': false})
    }
    onChange(windows)
  }

  handleChangeWindowType = (idx, type) => {
    const {onChange} = this.props
    const windows = this.props.windows.slice()
    windows[idx].type = type
    onChange(windows)
  }

  handleChangeShutter = (idx) => {
    const {onChange} = this.props
    const windows = this.props.windows.slice()
    windows[idx].shutter = !windows[idx].shutter
    onChange(windows)
  }

  render() {
    return (
      <div>
        {this.renderWindowsSelector()}
        {this.renderWindow()}
      </div>
    )
  }

  renderWindowsSelector() {
    const {classes, windows} = this.props
    return (
      <div className={classes.windows}>
        <Typography>
          Nombre de fenêtre à 2 vantaux
        </Typography>
        <div className="formGroup">
          <div className={"icon"} onClick={() => this.handleAddWindow(-1)}>
            <RemoveIcon color={"secondary"}/>
          </div>
          <div className={"value"}>{windows.length}</div>
          <div className={"icon"} onClick={() => this.handleAddWindow(1)}>
            <AddIcon color={"primary"}/>
          </div>
        </div>
      </div>
    )
  }

  renderWindow() {
    const {windows, windowsAvailable, classes} = this.props
    return windows.map((window, idx) => {
      const itemChecked = windowsAvailable.find(windowAvailable => window.type === windowAvailable.value)
      return (
        <div key={`door-${idx}`} className={classes.window}>
          <Typography>Fenêtre {idx + 1}</Typography>
          <div className="formGroup">
            <RadioGroup items={windowsAvailable}
                        itemChecked={itemChecked}
                        onClick={(item) => this.handleChangeWindowType(idx, item.value)}/>
            <div className="shutter">
              <Checkbox checked={window.shutter}
                        label="Avec volets"
                        onClick={() => this.handleChangeShutter(idx)}
              />
            </div>
          </div>
        </div>
      )
    })
  }
}

export default withStyles(styles)(OpeningWindow)
