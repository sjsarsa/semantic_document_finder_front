import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Translate } from 'react-redux-i18n'

class SimilarityRatingInfoDialog extends React.Component {
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
        <Button style={{minWidth: '50px'}} onClick={this.handleClickOpen}>
          <Translate value="info"/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="dialog-title">
          <DialogTitle id="dialog-title"><Translate value="similarityRatingDialog.title"/></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Translate value="similarityRatingDialog.info"/>
            </DialogContentText>
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

export default SimilarityRatingInfoDialog