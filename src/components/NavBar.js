import React from 'react'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core//Button'
import { Link } from 'react-router-dom'
import { I18n, Translate } from 'react-redux-i18n'
import PropTypes from 'prop-types'

import sfLogo from '../images/sf-logo.png'
import '../App.css'
import LogoutButton from './LogoutButton'
import { getUser } from '../actions/userActions'

function mapStateToProps (state) {
  return {
    loggedUser: state.user.loggedUser
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUser: () => getUser(dispatch),
  }
}

class NavBar extends React.Component {
  componentDidMount () {
    this.props.getUser()
  }

  render () {
    return (
      <div className="text-left">
        <AppBar position="static">
          <Toolbar>
            <img src={sfLogo} style={{height: '60px', marginRight: '20px'}} alt="logo"/>
            <Typography className="flex" style={{minWidth: '50%'}} variant="h5" color="inherit">
              <Translate value="navBar.title"/>
            </Typography>
            <div style={{minWidth: '20%'}}>
                <Link to={process.env.PUBLIC_URL + '/'} className="link-button">
                  <Button color="inherit"><Translate value="home"/></Button>
                </Link>
                <Link to={process.env.PUBLIC_URL + '/' + I18n.t('navigation.documentSearch')} className="link-button">
                  <Button color="inherit">{I18n.t('navBar.documentSearch')}</Button>
                </Link>
                {this.props.loggedUser &&
                <Link key="compareDocumentsLink" to={process.env.PUBLIC_URL + '/' + I18n.t('navigation.compareDocuments')}
                      className="link-button">
                  <Button color="inherit"><Translate value="document.compare"/></Button>
                </Link>}
                <Link to={process.env.PUBLIC_URL + '/' + I18n.t('navigation.about')} className="link-button">
                  <Button color="inherit">{I18n.t('navBar.about')}</Button>
                </Link>
                {this.props.loggedUser ?
                  <LogoutButton key="logoutButton"/>
                  :
                  <Link to={process.env.PUBLIC_URL + '/login'} className={'link-button'}>
                    <Button color="inherit"><Translate value="login"/></Button>
                  </Link>}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  getUser: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)