import { connect } from 'react-redux'
import NavBar from '../../../components/common/nav-bar'
import {authenticateUser} from "../../../actions/user-actions";

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (history) => dispatch(authenticateUser(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
