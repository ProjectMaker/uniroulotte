export default theme => ({
  door: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    }
  },

  doorSelector: {
    [theme.breakpoints.up('xs')]: {
      marginLeft: '154px'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  }
})
