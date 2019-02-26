import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Translate } from 'react-redux-i18n'
import PropTypes from 'prop-types'

class InfoDialog extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  getDialogContent = () => {
    return this.props.contentKeys.map(key =>
      <div style={{paddingBottom: '10px', whiteSpace: 'pre-line'}} key={key}>
        <Typography variant="title"><Translate value={`infoDialog.${this.props.info}.${key}.title`}/></Typography>
        <DialogContentText style={{padding: '5px'}}><Translate value={`infoDialog.${this.props.info}.${key}.text`} dangerousHTML/></DialogContentText>
      </div>)
  }

  render () {
    const buttonTitle = this.props.buttonTitle || this.props.info
    return (
      <div style={this.props.style}>
        <Button style={{minWidth: '50px'}} onClick={this.handleClickOpen}>
          {buttonTitle}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="dialog-title">
          <DialogTitle id="dialog-title"><Translate value={"infoDialog." + this.props.info + ".title"}/></DialogTitle>
          <DialogContent>
          {this.getDialogContent()}
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

InfoDialog.propTypes = {
  info: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
  contentKeys: PropTypes.array.isRequired,
  style: PropTypes.object
}
export default InfoDialog