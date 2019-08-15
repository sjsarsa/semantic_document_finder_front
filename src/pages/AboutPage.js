import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Typography from '@material-ui/core/Typography'
import { Translate, I18n } from 'react-redux-i18n'
import InfoPanel from '../components/InfoPanel'

class AboutPage extends Component {

    infoPanelStyle = {
        padding: '2vw',
        overflowY: 'hidden',
        maxHeight: 'none'
    }

  render () {
    return (
      <div className="flex" >
        <Typography variant="h5" style={{margin: '2vw'}}><Translate value="about.title" /></Typography>
        <InfoPanel buttonTitle={I18n.t("infoDialog.general.button")} info="general" contentKeys={["creator", "contact"]} style={this.infoPanelStyle}/>
        <InfoPanel buttonTitle={I18n.t("infoDialog.accounts.button")} info="accounts" contentKeys={["usage", "privacy"]} style={this.infoPanelStyle}/>
        <InfoPanel buttonTitle={I18n.t("infoDialog.sourceCode.button")} info="sourceCode" contentKeys={["frontend", "backend"]} style={this.infoPanelStyle}/>
      </div>
    )
  }
}

export default connect()(AboutPage)
