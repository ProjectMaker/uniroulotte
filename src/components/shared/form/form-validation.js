import {Component} from "react"
import validate from "validate.js"

export default class ValidationApi extends Component {
  constructor(props) {
    super(props)
    this.state = Object.keys(props.validators).reduce((fields, field) => {
      fields[field] = {value: '', error: false}
      return fields
    }, {})
  }

  validateForm = () => {
    const {validators} = this.props
    const fields = Object.keys(this.state).reduce((fields, field) => {
      fields[field] = this.state[field].value
      return fields
    }, {})
    return validate(fields, validators, {fullMessages: false})
  }

  handleChange = (field, value) => {
    this.setState(
      (state) => ({[field]: {value}}),
      () => {
        const result = this.validateForm()
        const error = result && result[field] ? result[field][0] : false
        this.setState({[field]: {value, error}})
      })
  }

  handleValid = () => {
    const result = this.validateForm()
    if (result) {
      Object.keys(this.state).forEach(field => {
        const error = result[field] ? result[field][0] : false
        this.setState({[field]: {value: this.state[field].value, error}})
      })
    } else {
      const {onSubmit} = this.props
      onSubmit({...this.state})
    }
  }

  getStateAndHelper = () => {
    return {
      onChange: this.handleChange,
      onValid: this.handleValid,
      fields: {...this.state}
    }
  }

  render() {
    return this.props.children(this.getStateAndHelper())
  }
}
