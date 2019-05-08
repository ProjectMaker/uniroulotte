import React, {Component} from "react"
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}

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

      if (isLoading && !profile) {
        redirect()
      }
    }

    render() {
      const {profile, redirect, isLoading, isFetched, ...props} = this.props
      if (!(!isLoading && isFetched)) {
        return this.renderLoader()
      }
      return profile ? <WrappedComponent {...props} /> : null
    }

    renderLoader() {
      const {classes} = this.props
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )
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

  return withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate))
}
