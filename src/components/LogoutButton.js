import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { Translate } from 'react-redux-i18n'

import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    logout: () => logout(dispatch)
  }
}

class LogoutButton extends React.Component {
  render () {
    return (
      <Link to={process.env.PUBLIC_URL + "/"}>
        <Button onClick={this.props.logout} color="inherit">
          <Translate value="logout"/>
        </Button>
      </Link>
    )
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)