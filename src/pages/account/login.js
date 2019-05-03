import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Button from "@material-ui/core/Button/Button"
import validate from "validate.js"

const styles = theme => ({
  card: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '250px',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    height: '10px',
    fontSize: '12px'
  },
  label: {
    height: '10px',
    fontSize: '12px'
  },
  button: {
    marginTop: '20px',
    color: theme.palette.common.white
  },
  errors: {
    marginTop: '15px',
  }
})

const validators = {
  email: {
    email: {
      message: 'L\' email n\' est pas valide'
    }
  },
  password: {
    length: {
      minimum: 8,
      tooShort: 'Le mot de passe doit contenir au minimum 8 caractères'
    }
  }
}

const validateField = (field, value) => {
  return validate({[field]: value}, validators, {fullMessages: false})
}

class AccountLogin extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    signin: PropTypes.func.isRequired
  }

  state = {
    email: {
      value: '',
      error: false
    },
    password: {
      value: '',
      error: false
    }
  }

  handleChange = (key, value) => {
    const result = validateField(key, value)
    const error = result && result[key].length ? result[key][0] : false
    this.setState({[key]: {value, error}})
  }

  handleValid = () => {
    const {signin} = this.props
    const {email, password} = this.state
    if (!(validateField('email', email.value) && validateField('password', password.value))) {
      signin(email.value, password.value)
    }
  }

  render() {
    const {classes, user} = this.props
    const {email, password} = this.state
    return (
      <div className={classes.card}>
        <div className={classes.form}>
          <div>
            <TextField
              error={!!email.error}
              required
              id="email"
              label="Email"
              name="email"
              margin="normal"
              variant="outlined"
              onChange={(evt) => this.handleChange('email', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
          </div>
          <div>
            <TextField
              error={!!password.error}
              required
              id="password"
              label="Password"
              name="password"
              margin="none"
              type="password"
              variant="outlined"
              onChange={(evt) => this.handleChange('password', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
          </div>
          {this.renderErrors()}
          <div>
            {!user.isFetching ?
              <Button
                disabled={!!(email.error || password.error)}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => this.handleValid()}>
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
    const {classes, user} = this.props
    const {email, password} = this.state
    if (user.error || email.error || password.error) {
      return (
        <div className={classes.errors}>
          {email.error ?
            <Typography>{email.error}</Typography>
            : null}
          {password.error ?
            <Typography>{password.error}</Typography>
            : null}
          {user.error ?
            <Typography>{user.error}</Typography>
            : null}
        </div>
      )
    }
  }
}

export default withStyles(styles)(AccountLogin)
