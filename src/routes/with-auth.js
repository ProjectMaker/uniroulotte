import React, {Component} from "react"
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'

import LoaderFullScreen from '../components/shared/loader/full-screen'

export default (WrappedComponent) => {
  class Authenticate extends Component {
    static propTypes = {
      profile: PropTypes.object,
      redirect: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired,
      isFetched: PropTypes.bool.isRequired
    }

    componentDidMount() {
      this.checkAndRedirect()
    }
    componentDidUpdate() {
      this.checkAndRedirect()
    }

    checkAndRedirect() {
      const { profile, isLoading, redirect } = this.props

      if (!isLoading && !profile) {
        redirect()
      }
    }

    render() {
      const {profile, isLoading, isFetched, ...props} = this.props
      if (!(!isLoading && isFetched)) {
        return <LoaderFullScreen />
      }
      return profile ? <WrappedComponent {...props} /> : null
    }
  }

  const mapStateToProps = (state) => {
    return {
      isLoading: state.user.isLoading,
      isFetched: state.user.isFetched,
      profile: state.user.data
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      redirect: () => dispatch(push('/account/login'))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate)
}
