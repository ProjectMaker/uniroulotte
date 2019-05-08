export default theme => ({
  wrapper: {
    padding: '22px 10px',
  },

  windows: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },

    '& .formGroup': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '46px',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
      '& .value': {
        margin: '0 10px'
      },

      '& .icon': {
        height: '24px',
        cursor: 'pointer'
      }
    }
  },
  window: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '20px',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },

    '& .shutter': {
      marginTop: '5px'
    },

    '& .formGroup': {
      marginLeft: '181px',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      }
    }
  }
})
