import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Typography from '@material-ui/core/Typography'
import { Translate, I18n } from 'react-redux-i18n'
import InfoDialog from '../components/dialogs/InfoDialog'

function mapStateToProps (state) {
  return {
    loggedUser: state.user.loggedUser
  }
}


class AboutPage extends Component {
  render () {
    return (
      <div className="flex" style={{}}>
        <Typography variant="title" style={{margin: '20px'}}><Translate value="about.title" /></Typography>
        {/*<Typography variant="title"><Translate value="infoDialog.algorithms.title"/></Typography>*/}
        {/*<Typography variant="title"><Translate value="infoDialog.features.title"/></Typography>*/}

        {/*<Typography variant="title"><Translate value="infoDialog.similarity.title"/></Typography>*/}
        {/*<Typography variant="title"><Translate value="infoDialog.data.title"/></Typography>*/}
        <InfoDialog info="general" contentKeys={["creator", "contact"]} style={{padding: '20px'}}/>
        <InfoDialog buttonTitle={I18n.t("infoDialog.accounts.button")} info="accounts" contentKeys={["usage", "privacy"]} style={{padding: '20px'}}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(AboutPage)
