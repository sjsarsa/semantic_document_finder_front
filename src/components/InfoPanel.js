import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Translate } from 'react-redux-i18n'
import PropTypes from 'prop-types'
import theme from './muiTheme'

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
      <div style={{paddingBottom: '10px', whiteSpace: 'pre-line', flexDirection: 'column'}} key={key}>
        <ExpansionPanelDetails style={{flexDirection: 'column'}}>
          <Typography variant="title"><Translate value={`infoDialog.${this.props.info}.${key}.title`}/></Typography>
          <Typography style={{padding: '5px'}}><Translate value={`infoDialog.${this.props.info}.${key}.text`}
                                                          dangerousHTML/></Typography>
        </ExpansionPanelDetails>
      </div>)
  }

  expansionClass = {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    display: 'inline-flex',
    flexGrow: 1
  }

  render () {
    const buttonTitle = this.props.buttonTitle || this.props.info
    return (
      <div className="flex" style={{width: '100%'}}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon/>}>
            <Typography style={this.expansionClass}>{buttonTitle}</Typography>
          </ExpansionPanelSummary>
          {/*<ExpansionPanelDetails>*/}
          {this.getDialogContent()}

        </ExpansionPanel>
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