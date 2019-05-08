import React, {Component, Fragment} from 'react'

import Quotation from './quotation'
import ModalError from "../../components/shared/modal-error";
import {
  calculatePrice, sendDemand
} from "../../api/quotation"

class QuotationContainer extends Component {
  state = {
    area: {
      largeur: 2,
      longueur: 4
    },
    equipments: [],
    door: {
      type: 'full'
    },
    windows: [],
    roofing: {
      label: 'Tôles plates galvanisées',
      value: 'tolegalva'
    },
    price: 0,
    sendingInProgress: false,
    sendingInError: false
  }

  handleChangeQuotation = (item, value) => {
    this.setState(
      () => ({[item]: value}),
      () => {
        const price = calculatePrice({...this.state})
        this.setState({price})
      }
    )
  }

  sendQuotation = (firstname, lastname, email, phoneNumber) => {
    const {area, equipments, windows, door, roofing, price} = this.state
    const detail = {area, equipments, windows, door, roofing}
    this.setState({sendingInProgress: true})
    sendDemand(email, firstname, lastname, phoneNumber, price.toLocaleString(), detail)
      .then(res => {
        this.setState(
          () => ({sendingInError: false, sendingInProgress: false}),
          () => this.props.history.push('/confirm')
        )
      })
      .catch(err => this.setState({sendingInError: true, sendingInProgress: false}))
  }

  componentDidMount() {
    const price = calculatePrice({...this.state})
    this.setState({price})
  }

  render() {
    const {area, equipments, door, windows, roofing, sendingInProgress, sendingInError} = this.state
    return (
      <Fragment>
        <ModalError
          open={sendingInError}
          onClose={() => this.setState({sendingInError: false})}
          description="Un problème est survenu ...."
        />
        <Quotation
          area={area}
          equipments={equipments}
          door={door}
          windows={windows}
          roofing={roofing}
          onChange={this.handleChangeQuotation}
          onSubmit={this.sendQuotation}
          submissionInProgress={sendingInProgress}
          submissionError={sendingInError}
        />
      </Fragment>
    )
  }
}

export default QuotationContainer
