import { connect } from 'react-redux'
import List from '../../../pages/list'

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(List)
