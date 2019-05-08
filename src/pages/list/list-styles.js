export default theme => ({
  wrapper: {
    display: 'flex',
    margin: theme.spacing.unit * 3
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },

  tableCellAction: {
    cursor: 'pointer'
  }
})
