import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import OpeningWindow from './window/opening-window'
import OpeningDoor from './door/opening-door'
import styles from './opening-styles'

const Opening = ({classes, door, windows, windowsAvailable, onChangeDoor, onChangeWindows}) => (
  <div>
    <div className={classes.door}>
      <OpeningDoor door={door} onChange={onChangeDoor}/>
    </div>
    <div className={classes.windows}>
      <OpeningWindow windows={windows} windowsAvailable={windowsAvailable}
                     onChange={onChangeWindows}/>
    </div>
  </div>
)

Opening.propTypes = {
  door: PropTypes.object.isRequired,
  windows: PropTypes.array.isRequired,
  windowsAvailable: PropTypes.array.isRequired,
  onChangeDoor: PropTypes.func.isRequired,
  onChangeWindows: PropTypes.func.isRequired
}
export default withStyles(styles)(Opening)
