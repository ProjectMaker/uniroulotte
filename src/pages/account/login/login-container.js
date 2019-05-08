import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import validate from "validate.js"

import { loginStyles } from './login-styles'
import { SIGNIN_FORM_VALIDATORS } from '../../../constants'

const validateField = (field, value) => {
  return validate({[field]: value}, SIGNIN_FORM_VALIDATORS, {fullMessages: false})
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
  }
}

export default withStyles(loginStyles)(AccountLogin)
