import { connect } from 'react-redux'
import {
  siginUser
} from '../../../actions/user-actions'

import Signin from '../../../components/pages/account/login'

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  siginUser: (email, password) => dispatch(siginUser(email, password, ownProps))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
