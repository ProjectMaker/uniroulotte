import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress'

import styles from './loader-full-screen-styles'

const LoaderFullScreen = ({classes}) => (
  <div className={classes.loader}>
    <CircularProgress />
  </div>
)

export default withStyles(styles)(LoaderFullScreen)
