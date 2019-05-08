export default theme => ({
  card: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '250px',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
  errors: {
    marginTop: '15px',
  }
})
