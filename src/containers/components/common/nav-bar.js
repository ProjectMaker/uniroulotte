import { connect } from 'react-redux'
import NavBar from '../../../components/common/nav-bar'
import {authenticateUser, signoutUser} from "../../../actions/user-actions";

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (history) => dispatch(authenticateUser(history)),
    signoutUser: (history) => dispatch(signoutUser(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
