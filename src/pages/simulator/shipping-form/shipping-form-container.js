import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FormValidation from '../../../components/shared/form/form-validation'
import ShippingForm from './shipping-form'
import { SHIPPING_FORM_VALIDATORS } from '../../../constants'

export default class ShippingFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    submissionInProgress: PropTypes.bool.isRequired,
    submissionError: PropTypes.bool.isRequired
  }

  handleSubmit = (fields) => {
    const {onSubmit} = this.props
    onSubmit(fields.firstname.value, fields.lastname.value, fields.email.value, fields.phoneNumber.value)
  }

  render() {
    const {submissionInProgress} = this.props
    return (
      <FormValidation onSubmit={this.handleSubmit} validators={SHIPPING_FORM_VALIDATORS}>
        {({onChange, onValid, fields}) => (
          <ShippingForm
            onChange={onChange}
            onValid={onValid}
            fields={fields}
            submissionInProgress={submissionInProgress}/>
        )}
      </FormValidation>
    )
  }
}
