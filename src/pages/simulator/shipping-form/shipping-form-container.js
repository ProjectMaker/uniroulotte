import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FormValidation from '../../../components/shared/form/form-validation'
import ShippingForm from './shipping-form'
import { SHIPPING_FORM_VALIDATORS } from '../../../constants'

export default class ShippingFormContainer extends Component {
  static propTypes = {
    sendSimulation: PropTypes.func.isRequired,
    sendingInProgress: PropTypes.bool.isRequired
  }

  handleSubmit = (fields) => {
    const {sendSimulation} = this.props
    const user = {
      firstname: fields.firstname.value,
      lastname: fields.lastname.value,
      email: fields.email.value,
      phone_number: fields.phone_number.value
    }
    sendSimulation(user)
  }

  render() {
    const {sendingInProgress} = this.props
    return (
      <FormValidation onSubmit={this.handleSubmit} validators={SHIPPING_FORM_VALIDATORS}>
        {({onChange, onValid, fields}) => (
          <ShippingForm
            sendingInProgress={sendingInProgress}
            onChange={onChange}
            onValid={onValid}
            fields={fields} />
        )}
      </FormValidation>
    )
  }
}
