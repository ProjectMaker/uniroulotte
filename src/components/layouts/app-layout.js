import React, {Component} from 'react'
import NavBar from '../common/nav-bar'

class AppLayout extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}

export default AppLayout
