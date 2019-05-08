export default theme => ({
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
