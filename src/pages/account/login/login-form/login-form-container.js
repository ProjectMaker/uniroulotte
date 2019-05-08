import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FormValidation from '../../../../components/shared/form/form-validation'
import LoginForm from './login-form'
import { SIGNIN_FORM_VALIDATORS } from '../../../../constants'

export default class LoginFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submissionInProgress: PropTypes.bool.isRequired,
    submissionError: PropTypes.string
  }

  handleSubmit = (fields) => {
    const {onSubmit} = this.props
    onSubmit(fields.email.value, fields.password.value)
  }

  render() {
    const {submissionInProgress, submissionError} = this.props
    return (
      <FormValidation onSubmit={this.handleSubmit} validators={SIGNIN_FORM_VALIDATORS}>
        {({onChange, onValid, fields}) => (
          <LoginForm
            onChange={onChange}
            onValid={onValid}
            fields={fields}
            submissionInProgress={submissionInProgress}
            submissionError={submissionError}
          />
        )}
      </FormValidation>
    )
  }
}
