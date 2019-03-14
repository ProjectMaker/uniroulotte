import { connect } from 'react-redux'
import withAuthenticate from '../../../components/hocs/withAuthenticate'
import List from '../../../components/pages/list'

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(withAuthenticate(List))
