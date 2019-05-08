import React, {Component} from 'react'
import PropTypes from 'prop-types'
import QuotationList from './list'

class QuotationListContainer extends Component {
  static propTypes = {
    quotations: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    isFetched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fetchQuotations: PropTypes.func.isRequired
  }
  state = {
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
    const {quotations} = this.props
    const {quotationSelected} = this.state
    return (
      <QuotationList
        quotations={quotations}
        selection={quotationSelected}
        onSelect={this.handleSelectQuotation}
      />
    )
  }
}


export default QuotationListContainer
