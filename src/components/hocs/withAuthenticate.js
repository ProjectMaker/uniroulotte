import React, {Component} from 'react'

const withAuthenticate = (WrappedComponent) => {
  return class extends Component {
    componentWillMount() {
      if (!this.props.user.data) {
        this.props.history.push('/account/login')
      }
    }

    render() {
      return this.props.user.data ? <WrappedComponent {...this.props} /> : ''
    }
  }
}

export default withAuthenticate
