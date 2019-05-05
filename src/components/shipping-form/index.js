import React, {Component} from 'react'
import PropTypes from 'prop-types'
import validate from "validate.js"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography/Typography"

const styles = theme => ({
  fields: {
    display: 'flex',
    marginTop: '20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },

  field: {
    marginLeft: '10px',
    "&:first-child": {
      marginLeft: 0
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
      marginLeft: 0
    }

  },

  input: {
    height: '10px',
    fontSize: '12px'
  },

  label: {
    height: '10px',
    fontSize: '12px'
  },

  button: {
    marginTop: '20px',
    color: theme.palette.common.white
  },
  error: {
    color: '#ba000d'
  }
})

const validators = {
  email: {
    email: {
      message: 'L\' email n\' est pas valide'
    }
  },
  emailConfirm: {
    equality: {
      attribute: "email",
      message: 'Les emails doivent être identiques'
    },
  },
  firstname: {
    length: {
      minimum: 1,
      tooShort: 'Le prénom est obligatoire'
    }
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: 'Le nom est obligatoire'
    }
  },
  phoneNumber: {
    format: {
      pattern: "[0-9]*",
      flags: "i",
      message: "Le numéro de téléphone ne doit contenir que des chiffres"
    }
  }
}

const validateFields = (fields) => {
  return validate(fields, validators, {fullMessages: false})
}

class Validation extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    sendingInProgress: PropTypes.bool.isRequired,
    sendingInError: PropTypes.bool.isRequired
  }

  state = {
    email: {
      value: '',
      error: false
    },
    emailConfirm: {
      value: '',
      error: false
    },
    firstname: {
      value: '',
      error: false
    },
    lastname: {
      value: '',
      error: false
    },
    phoneNumber: {
      value: '',
      error: false
    }
  }

  validateForm = () => {
    const {lastname, firstname, phoneNumber, email, emailConfirm} = this.state
    return validateFields({
      lastname: lastname.value,
      firstname: firstname.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      emailConfirm: emailConfirm.value
    })
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
      ['firstname', 'lastname', 'email', 'emailConfirm', 'phoneNumber'].forEach(field => {
        const error = result[field] ? result[field][0] : false
        this.setState({[field]: {value: this.state[field].value, error}})
      })
    } else {
      const {firstname, lastname, email, phoneNumber} = this.state
      const {onSubmit} = this.props
      onSubmit(firstname.value, lastname.value, email.value, phoneNumber.value)
    }
  }

  render() {
    const {classes, sendingInProgress} = this.props
    const {email, emailConfirm, lastname, firstname, phoneNumber} = this.state
    return (
      <div>
        <Typography>Veuillez remplir les champs ci-dessous afin de recevoir votre devis</Typography>
        <div className={classes.fields}>
          <div className={classes.field}>
            <TextField
              error={!!lastname.error}
              required
              id="lastname"
              label="Nom"
              name="lastname"
              margin="none"
              variant="outlined"
              onChange={(evt) => this.handleChange('lastname', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
            {lastname.error ?
              <Typography variant={"caption"} classes={{root: classes.error}}>{lastname.error}</Typography>
              : null}
          </div>
          <div className={classes.field}>
            <TextField
              error={!!firstname.error}
              required
              id="firstname"
              label="Prénom"
              name="firtsname"
              margin="none"
              variant="outlined"
              onChange={(evt) => this.handleChange('firstname', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
            {firstname.error ?
              <Typography variant={"caption"} classes={{root: classes.error}}>{firstname.error}</Typography>
              : null}
          </div>
        </div>
        <div className={classes.fields}>
          <div className={classes.field}>
            <TextField
              error={!!email.error}
              required
              id="email"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="none"
              variant="outlined"
              onChange={(evt) => this.handleChange('email', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
            {email.error ?
              <Typography variant={"caption"} classes={{root: classes.error}}>{email.error}</Typography>
              : null}
          </div>
          <div className={classes.field}>
            <TextField
              required
              id="emailConfirm"
              label="Confirmation email"
              type="email"
              name="emailConfirm"
              autoComplete="email"
              margin="none"
              variant="outlined"
              onChange={(evt) => this.handleChange('emailConfirm', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
            {emailConfirm.error ?
              <Typography variant={"caption"} classes={{root: classes.error}}>{emailConfirm.error}</Typography>
              : null}
          </div>
        </div>
        <div className={classes.fields}>
          <div className={classes.field}>
            <TextField
              error={!!phoneNumber.error}
              id="phoneNumber"
              label="Numéro de téléphone"
              name="phoneNumber"
              margin="none"
              variant="outlined"
              onChange={(evt) => this.handleChange('phoneNumber', evt.target.value)}
              InputProps={{classes: {input: classes.input}}}
              InputLabelProps={{classes: {root: classes.label}}}
            />
            {phoneNumber.error ?
              <Typography variant={"caption"} classes={{root: classes.error}}>{phoneNumber.error}</Typography>
              : null}
          </div>
        </div>
        {!sendingInProgress ?
          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleValid()}>
            Envoyer la demande de devis
          </Button>
          : <Button variant="contained" color="primary" disabled className={classes.button}>
            Envoi en cours ...
          </Button>}
      </div>
    )
  }
}

export default withStyles(styles)(Validation)
