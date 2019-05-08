import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import moment from 'moment'

import Basket from '../../components/basket/basket'
import styles from './list-styles'


class DevisList extends Component {
  static propTypes = {
    quotations: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    isFetched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fetchQuotations: PropTypes.func.isRequired
  }
  state = {
    quotations: {
      isLoading: true,
      data: []
    },
    quotationSelected: null
  }

  handleSelectQuotation = (quotation) => {
    const {quotationSelected} = this.state
    if (quotationSelected && quotation._id === quotationSelected._id ) {
      this.setState({quotationSelected: null})
    } else {
      this.setState({quotationSelected: quotation})
    }
  }

  componentDidMount() {
    this.props.fetchQuotations()
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Prénom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Téléphone</TableCell>
                <TableCell>Prix</TableCell>
                <TableCell>Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderQuotations()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }

  renderQuotations () {
    const {classes, quotations} = this.props
    return quotations.map((quotation) => (
      <React.Fragment key={`${quotation._id}`}>
        <TableRow>
          <TableCell>{quotation.firstname}</TableCell>
          <TableCell>{quotation.lastname}</TableCell>
          <TableCell>{quotation.email}</TableCell>
          <TableCell>{quotation.phoneNumber}</TableCell>
          <TableCell>{quotation.price.toLocaleString()}</TableCell>
          <TableCell>{moment(quotation.createdAt).format('YYYY/MM/DD')}</TableCell>
          <TableCell onClick={() => this.handleSelectQuotation(quotation)} className={classes.tableCellAction}>Voir le détail</TableCell>
        </TableRow>
        {this.state.quotationSelected === quotation ?
          <TableRow>
            <TableCell colSpan={7}>
              <Basket {...quotation.detail} />
            </TableCell>
          </TableRow>
          : null}
      </React.Fragment>
    ))
  }
}


export default withStyles(styles)(DevisList)
