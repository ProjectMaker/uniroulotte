import { connect } from 'react-redux'
import {
  signinUser
} from '../../../actions/user-actions'

import Signin from '../../../pages/account/login'

const mapStateToProps = (state) => ({
  user: state.user
})

/*
const mapDispatchToProps = (dispatch, ownProps) => ({
  siginUser: (email, password) => dispatch(siginUser(email, password, ownProps))
})
*/

const mapDispatchToProps = dispatch => ({
  signin: (email, password) => dispatch(signinUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
