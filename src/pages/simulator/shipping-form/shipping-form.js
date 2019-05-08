import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography/Typography"
import styles from './shipping-form-styles'

const ShippingForm = ({onChange, onValid, fields, classes, sendingInProgress}) => (
  <div>
    <Typography>Veuillez remplir les champs ci-dessous afin de recevoir votre devis</Typography>
    <div className={classes.fields}>
      <div className={classes.field}>
        <TextField
          error={!!fields.lastname.error}
          required
          id="lastname"
          label="Nom"
          name="lastname"
          margin="none"
          variant="outlined"
          onChange={(evt) => onChange('lastname', evt.target.value)}
          InputProps={{classes: {input: classes.input}}}
          InputLabelProps={{classes: {root: classes.label}}}
        />
        {fields.lastname.error ?
          <Typography variant={"caption"} classes={{root: classes.error}}>{fields.lastname.error}</Typography>
          : null}
      </div>
      <div className={classes.field}>
        <TextField
          error={!!fields.firstname.error}
          required
          id="firstname"
          label="Prénom"
          name="firtsname"
          margin="none"
          variant="outlined"
          onChange={(evt) => onChange('firstname', evt.target.value)}
          InputProps={{classes: {input: classes.input}}}
          InputLabelProps={{classes: {root: classes.label}}}
        />
        {fields.firstname.error ?
          <Typography variant={"caption"} classes={{root: classes.error}}>{fields.firstname.error}</Typography>
          : null}
      </div>
    </div>
    <div className={classes.fields}>
      <div className={classes.field}>
        <TextField
          error={!!fields.email.error}
          required
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="none"
          variant="outlined"
          onChange={(evt) => onChange('email', evt.target.value)}
          InputProps={{classes: {input: classes.input}}}
          InputLabelProps={{classes: {root: classes.label}}}
        />
        {fields.email.error ?
          <Typography variant={"caption"} classes={{root: classes.error}}>{fields.email.error}</Typography>
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
          onChange={(evt) => onChange('emailConfirm', evt.target.value)}
          InputProps={{classes: {input: classes.input}}}
          InputLabelProps={{classes: {root: classes.label}}}
        />
        {fields.emailConfirm.error ?
          <Typography variant={"caption"} classes={{root: classes.error}}>{fields.emailConfirm.error}</Typography>
          : null}
      </div>
    </div>
    <div className={classes.fields}>
      <div className={classes.field}>
        <TextField
          error={!!fields.phoneNumber.error}
          id="phoneNumber"
          label="Numéro de téléphone"
          name="phoneNumber"
          margin="none"
          variant="outlined"
          onChange={(evt) => onChange('phoneNumber', evt.target.value)}
          InputProps={{classes: {input: classes.input}}}
          InputLabelProps={{classes: {root: classes.label}}}
        />
        {fields.phoneNumber.error ?
          <Typography variant={"caption"} classes={{root: classes.error}}>{fields.phoneNumber.error}</Typography>
          : null}
      </div>
    </div>
    {!sendingInProgress ?
      <Button variant="contained" color="primary" className={classes.button} onClick={() => onValid()}>
        Envoyer la demande de devis
      </Button>
      : <Button variant="contained" color="primary" disabled className={classes.button}>
        Envoi en cours ...
      </Button>}
  </div>
)

export default withStyles(styles)(ShippingForm)
