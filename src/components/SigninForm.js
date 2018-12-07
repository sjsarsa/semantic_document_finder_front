import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Button, Typography, Grow } from '@material-ui/core'
// local imports
import TextField from './material-ui-render-components/TextField'
import { Translate, I18n } from 'react-redux-i18n'
import { signin } from '../actions/userActions'

function mapStateToProps (state) {
  const formName = 'signinForm'

  return {
    signinError: state.user.signinError,
    signinSuccess: state.user.signinSuccess,
    form: formName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    signin: (username, password) => signin(dispatch, username, password)
  }
}

class SigninForm extends React.Component {

  getSigninError () {
    if (!this.props.signinError) return undefined

    if (this.props.signinError.data === 'Username already taken')
      return I18n.t('form.error.usernameTaken')

    if (this.props.signinError && this.props.signinError.data === 'Invalid password')
      return I18n.t('form.error.wrongPw')

  }

  validateUsername = value => value == null ? I18n.t('form.error.required', {field: 'Username'}) : undefined
  validatePassword = value => value == null ? I18n.t('form.error.required', {field: 'Password'}) : undefined

  buttonStyle = {
    padding: '5px 10px',
    alignSelf: 'right',
    marginTop: '10px'
  }

  onSubmit = (data) => {
    this.props.signin(data.username, data.password)
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <div style={{textAlign: 'right', padding: '20px', justifyContent: 'center'}}>
        <Grow in={this.props.signinError !== undefined}>
          <Typography style={{textAlign: 'center', color: 'red'}}>{this.getSigninError()}</Typography>
        </Grow>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="username"
                 autoComplete="off"
                 autoCorrect="off"
                 spellCheck="off"
                 component={TextField}
                 validate={this.validateUsername}
                 label="Username"
                 placeholder="Username"
                 fullWidth={true}/>
          <Field name="password"
                 component={TextField}
                 validate={this.validatePassword}
                 placeholder="*******"
                 label="Password"
                 type="password"
                 fullWidth={true}/>
          <Button type="submit" style={this.buttonStyle}><Translate value="form.submit"/></Button>
        </form>
        {this.props.signinSuccess &&
        <Typography variant='title' style={{textAlign: 'center', marginBottom: '10px', color: 'green'}}>
          {this.props.signinSuccess}
        </Typography>}
      </div>
    )
  }
}

SigninForm.propTypes = {
  signin: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm()(SigninForm))
