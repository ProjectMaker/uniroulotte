import { connect } from 'react-redux'
import NavBar from './nav-bar'
import {signoutUser} from "../../redux/actions/user-actions"

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    signoutUser: () => dispatch(signoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
