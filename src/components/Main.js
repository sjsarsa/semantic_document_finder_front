import React, { Component } from 'react'
import { connect } from 'react-redux'

import secoLogo from '../images/seco-logo.svg'
import sfLogo from '../images/sf-logo.png'
import '../App.css'
// import { Translate } from 'react-redux-i18n'
import Typography from '@material-ui/core/Typography'

function mapStateToProps (state) {
  return {
    loggedUser: state.user.loggedUser
  }
}


class Main extends Component {
  render () {
    return (
      <div className="flex" style={{textAlign: 'center'}}>
        <header className="App-header">
          <img src={secoLogo} className="App-logo-spin" alt="seco-logo"/>
          {/*<h1 className="App-title"><Translate value="app.title" /></h1>*/}
          <img src={sfLogo} className="App-logo-spin-reverse" alt="sf-logo"/>
        </header>
        <Typography className="App-intro">
          A work in progress...<br/><br/>Upcoming features: ELMo embeddings, combined algorithms,
          algorithm explanations, detailed info on rating documents, UI in Finnish, option to determine number of documents fetched (optimize speed of retrieving similar documents)
        </Typography>
        {this.props.loggedUser &&
        <Typography variant="title" style={{'padding': '50px'}}>
          Logged in as {this.props.loggedUser}
        </Typography>}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Main)
