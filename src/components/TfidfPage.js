import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import '../App.css'
import QueryResult from './QueryResult'
import { getSimilarTfidfDocsById, postDocumentToTfidfApi, setQueryDocument } from '../actions/documentActions'
import GetSimilarDocsFormWrapper from './GetSimilarDocsFormWrapper'
import { Translate } from 'react-redux-i18n'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilarTfidfDocsById: (document) => {
      dispatch(setQueryDocument(document))
      getSimilarTfidfDocsById(document.index, dispatch)
    },
    getSimilarTfidfDocs: document => postDocumentToTfidfApi(document, dispatch)
  }
}

class TfidfPage extends Component {
  render () {
    return (
      <div className="flex">
        <Typography variant="title" className="page-title"><Translate value="tfidf.title"/></Typography>
        <GetSimilarDocsFormWrapper getSimilarDocs={this.props.getSimilarTfidfDocs}/>
        <QueryResult getSimilar={this.props.getSimilarTfidfDocsById}/>
      </div>
    )
  }
}

TfidfPage.propTypes = {
  getSimilarTfidfDocsById: PropTypes.func.isRequired,
  getSimilarTfidfDocs: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TfidfPage)
