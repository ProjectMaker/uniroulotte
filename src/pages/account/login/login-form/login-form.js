import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Button from "@material-ui/core/Button/Button"

import styles from './login-form-styles'

class LoginForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    submissionInProgress: PropTypes.bool.isRequired,
    submissionError: PropTypes.string,
    fields: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired
  }

  render() {
    const {classes, submissionInProgress, fields, onChange, onValid} = this.props
    return (
      <div className={classes.card}>
        <div className={classes.form}>
          <div>
            <TextField
              error={!!fields.email.error}
              required
              id="email"
              label="Email"
              name="email"
              margin="normal"
              variant="outlined"
              onChange={(evt) => onChange('email', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
          </div>
          <div>
            <TextField
              error={!!fields.password.error}
              required
              id="password"
              label="Password"
              name="password"
              margin="none"
              type="password"
              variant="outlined"
              onChange={(evt) => onChange('password', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
          </div>
          {this.renderErrors()}
          <div>
            {!submissionInProgress ?
              <Button
                disabled={!!(fields.email.error || fields.password.error)}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => onValid()}>
                Connexion
              </Button>
              : <Button variant="contained" color="primary" disabled className={classes.button}>
                Envoi en cours ...
              </Button>}
          </div>
        </div>
      </div>
    )
  }

  renderErrors () {
    const {classes, fields, submissionError} = this.props
    if (submissionError || fields.email.error || fields.password.error) {
      return (
        <div className={classes.errors}>
          {fields.email.error ?
            <Typography>{fields.email.error}</Typography>
            : null}
          {fields.password.error ?
            <Typography>{fields.password.error}</Typography>
            : null}
          {submissionError ?
            <Typography>{submissionError}</Typography>
            : null}
        </div>
      )
    }
  }
}

export default withStyles(styles)(LoginForm)
