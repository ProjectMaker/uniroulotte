import { connect } from 'react-redux'
import {
  signinUser
} from '../../../actions/user-actions'

import Signin from './login'

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  signin: (email, password) => dispatch(signinUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
