import React, { Component } from 'react'
import { connect } from 'react-redux'

import secoLogo from '../../images/seco-logo.svg'
import sfLogo from '../../images/sf-logo.png'
import '../../App.css'
// import { Translate } from 'react-redux-i18n'
import Typography from '@material-ui/core/Typography'
import { Translate } from 'react-redux-i18n'

function mapStateToProps (state) {
  return {
    loggedUser: state.user.loggedUser
  }
}


class MainPage extends Component {
  render () {
    return (
      <div className="flex" style={{textAlign: 'center'}}>
        <header className="App-header">
          <img src={secoLogo} className="App-logo-spin" alt="seco-logo"/>
          {/*<h1 className="App-title"><Translate value="app.title" /></h1>*/}
          <img src={sfLogo} className="App-logo-spin-reverse" alt="sf-logo"/>
        </header>
        <Typography className="App-intro">
          A work in progress...<br/><br/>Please try the document search anyway or log in to rate search results.
        </Typography>
        {this.props.loggedUser &&
        [<Typography variant="title" style={{'padding': '50px'}}>
          <Translate value="loggedIn.title" username={this.props.loggedUser}/>
        </Typography>,
        <Typography><Translate value="loggedIn.ratingInfo"/></Typography>]}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(MainPage)
