import React, { Component } from 'react'
import { connect } from 'react-redux'


import '../../App.css'
import QueryResult from '../QueryResult'
import { getSimilarDocsById, setQueryDocument } from '../../actions/documentActions'
import GetSimilarDocsFormWrapper from '../Forms/GetSimilarDocsFormWrapper'
import { Translate } from 'react-redux-i18n'
import { Typography } from '@material-ui/core'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilarDoc2VecDocsById: (document, modelName) => {
      dispatch(setQueryDocument(document))
      return getSimilarDocsById(document.index, modelName, dispatch)
    }
  }
}

class DocumentSearchPage extends Component {
  render () {
    return (
      <div className="flex">
        <Typography variant="title" className="page-title">
          <Translate value="page.documentSearch.title"/>
        </Typography>
        <GetSimilarDocsFormWrapper/>
        <QueryResult/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentSearchPage)
