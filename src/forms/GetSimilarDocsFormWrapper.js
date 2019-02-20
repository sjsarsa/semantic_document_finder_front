import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

import '../App.css'
import GetSimilarDocsForm from './GetSimilarDocsForm'
import { Translate } from 'react-redux-i18n'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

class GetSimilarDocsFormWrapper extends Component {

  state = {
    showForm: true,
  }

  toggleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    return (
      <div style={{textAlign: this.state.showForm ? 'right' : 'center', margin: '20px'}}>
        {this.state.showForm ?
        <GetSimilarDocsForm getSimilar={this.props.getSimilarDocs} toggleShowForm={this.toggleShowForm}/>
        :
        <Button style={{padding: '20px'}} onClick={this.toggleShowForm}>
          <Translate value="document.find"/>
        </Button>}
      </div>
    )
  }
}

GetSimilarDocsFormWrapper.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSimilarDocsFormWrapper)
