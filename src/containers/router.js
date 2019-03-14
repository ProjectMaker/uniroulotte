import { connect } from 'react-redux'
import AppRouter from '../components/router'
import {authenticateUser} from "../actions/user-actions";

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
