import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import Typography from '@material-ui/core/Typography'
import { Translate, I18n } from 'react-redux-i18n'
import InfoPanel from '../components/InfoPanel'

class AboutPage extends Component {
  render () {
    return (
      <div className="flex" >
        <Typography variant="title" style={{margin: '20px'}}><Translate value="about.title" /></Typography>
        <InfoPanel buttonTitle={I18n.t("infoDialog.general.button")} info="general" contentKeys={["creator", "contact"]} style={{padding: '20px'}}/>
        <InfoPanel buttonTitle={I18n.t("infoDialog.accounts.button")} info="accounts" contentKeys={["usage", "privacy"]} style={{padding: '20px'}}/>
        <InfoPanel buttonTitle={I18n.t("infoDialog.sourceCode.button")} info="sourceCode" contentKeys={["frontend", "backend"]} style={{padding: '20px'}}/>
      </div>
    )
  }
}

export default connect()(AboutPage)
