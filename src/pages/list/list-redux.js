import { connect } from 'react-redux'
import {
  fetchQuotations
} from '../../redux/actions/quotation-actions'

import List from './list-container'

const mapStateToProps = (state) => ({
  quotations: state.quotation.quotations,
  isLoading: state.quotation.isLoading,
  isFetched: state.quotation.isFetched,
  error: state.quotation.error
})

const mapDispatchToProps = dispatch => ({
  fetchQuotations: () => dispatch(fetchQuotations())
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
