import { connect } from 'react-redux'
import NavBar from '../../../components/shared/nav-bar'
import {signoutUser} from "../../../actions/user-actions";

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    signoutUser: () => dispatch(signoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
