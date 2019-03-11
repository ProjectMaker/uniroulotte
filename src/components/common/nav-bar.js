import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from "react-router"
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import IconMenu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  appBar: {
    padding: '20px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.common.white
  },
  iconMenu: {
    cursor: 'pointer',
    color: theme.palette.common.white
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-end',

    "& ul": {
      margin: '10px 0 0'
    },
  },
  link: {
    display: 'inline',
    color: theme.palette.common.white,
    marginRight: '20px',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },

    "&:last-child": {
      marginRight: 0
    },

    "& a": {
      textDecoration: 'none',
      color: theme.palette.common.white
    }
  }
})

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuExpanded: false
    }
  }
  componentDidMount() {
    // const {history} = this.props
    // this.props.authenticateUser(history)
  }
  render() {
    const {menuExpanded} = this.state
    const {classes, user} = this.props
    return (
      <AppBar position="static" classes={{root: classes.appBar}}>
        <div className={classes.toolbar}>
          <Typography variant="h6" color="inherit" classes={{root: classes.title}}>
            Simulateur
          </Typography>
          <IconMenu classes={{root: classes.iconMenu}} onClick={() => this.setState({menuExpanded: !menuExpanded})}/>
        </div>
        {menuExpanded ? this.renderMenu() : ''}
      </AppBar>
    )
  }

  renderMenu() {
    const {user} = this.props
    return user.data ? this.renderAdminMenu() : this.renderDefaultMenu()
  }

  renderDefaultMenu() {
    const {classes} = this.props
    return (
      <div className={classes.links}>
        <ul>
          <li className={classes.link}>
            <a href="https://www.uni-roulotte.fr">Home page</a></li>
          <li className={classes.link}>
            <a href="https://www.uni-roulotte.fr/mes-roulottes-en-bois">Mes roulottes</a>
          </li>
          <li className={classes.link}>
            <a href="https://www.uni-roulotte.fr/mes-valeurs">Mes valeurs</a>
          </li>
          <li className={classes.link}>
            <a href="https://www.uni-roulotte.fr/me-contacter">Me contacter</a>
          </li>
        </ul>
      </div>
    )
  }

  renderAdminMenu() {
    const {classes} = this.props
    return (
      <div className={classes.links}>
        <ul>
          <li className={classes.link}><Link to="/">Simulateur</Link></li>
          <li className={classes.link}><Link to="/list">Liste des devis</Link></li>
        </ul>
      </div>
    )
  }
}

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
  authenticateUser: PropTypes.func.isRequired
}
export default withRouter(withStyles(styles)(NavBar))
