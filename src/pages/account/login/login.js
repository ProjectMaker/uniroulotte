import React from 'react'
import PropTypes from 'prop-types'

import LoginForm from './login-form'

const Login = ({user, signin}) => (
  <LoginForm
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
