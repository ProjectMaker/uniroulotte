import React from 'react'
import PropTypes from 'prop-types'

import LoginFormContainer from './login-form/login-form-container'

const Login = ({user, signin}) => (
  <LoginFormContainer
    onSubmit={signin}
    submissionInProgress={user.isLoading}
    submissionError={user.error}
  />
)

Login.propTypes = {
  user: PropTypes.object.isRequired,
  signin: PropTypes.func.isRequired
}

export default Login
