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

import Basket from '../../components/basket'
import styles from './list-styles'


class QuotationList extends Component {
  static propTypes = {
    quotations: PropTypes.array,
    selection: PropTypes.object,
    onSelect: PropTypes.func.isRequired
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
    const {classes, quotations, selection, onSelect} = this.props
    return quotations.map((quotation) => (
      <React.Fragment key={`${quotation.id}`}>
        <TableRow>
          <TableCell>{quotation.firstname}</TableCell>
          <TableCell>{quotation.lastname}</TableCell>
          <TableCell>{quotation.email}</TableCell>
          <TableCell>{quotation.phone_number}</TableCell>
          <TableCell>{quotation.price.toLocaleString()}</TableCell>
          <TableCell>{moment(quotation.createdAt).format('YYYY/MM/DD')}</TableCell>
          <TableCell onClick={() => onSelect(quotation)} className={classes.tableCellAction}>Voir le détail</TableCell>
        </TableRow>
        {selection === quotation ?
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


export default withStyles(styles)(QuotationList)
