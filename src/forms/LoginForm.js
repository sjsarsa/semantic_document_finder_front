import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Button, Typography, Grow, Paper } from '@material-ui/core'
// local imports
import TextField from '../components/material-ui-render-components/TextField'
import { Translate, I18n } from 'react-redux-i18n'
import { login } from '../actions/userActions'

function mapStateToProps (state) {
  const formName = 'loginForm'

  return {
    loginError: state.user.loginError,
    form: formName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (username, password) => login(dispatch, username, password)
  }
}

class LoginForm extends React.Component {

  getLoginError () {
    if (!this.props.loginError) return undefined

    if (this.props.loginError.data === 'Username not found')
      return I18n.t('form.error.unknownUser')

    if (this.props.loginError && this.props.loginError.data === 'Invalid password')
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
    this.props.login(data.username, data.password)
  }

  render () {
    const {handleSubmit} = this.props
    return (
      <div style={{textAlign: 'right', padding: '2vw', justifyContent: 'center'}}>
        <Paper style={{padding: '30px', maxWidth: '800px'}}>
          <Typography variant='h5' style={{textAlign: 'left', marginBottom: '10px'}}>
            <Translate value='login'/>
          </Typography>
          <Grow in={this.props.loginError !== undefined}>
            <Typography style={{textAlign: 'center', color: 'red'}}>{this.getLoginError()}</Typography>
          </Grow>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="username"
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
        </Paper>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm()(LoginForm))
