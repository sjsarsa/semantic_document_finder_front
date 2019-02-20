import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Translate } from 'react-redux-i18n'
import SigninForm from '../../forms/SigninForm'

class SigninDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render () {

    return (
      <div>
        <Button style={{minWidth: '50px', padding: '10px', marginTop: '15px'}} onClick={this.handleClickOpen}>
          <Translate value="signin"/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="dialog-title">
          <DialogTitle id="dialog-title"><Translate value="dialog.signin.title"/></DialogTitle>
          <DialogContent>
            <SigninForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              <Translate value="close"/>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default SigninDialog