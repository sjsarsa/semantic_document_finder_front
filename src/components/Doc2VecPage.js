import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import '../App.css'
import QueryResult from './QueryResult'
import { getSimilarDoc2VecDocsById, postDocumentToDoc2VecApi, setQueryDocument } from '../actions/documentActions'
import GetSimilarDocsFormWrapper from './GetSimilarDocsFormWrapper'
import { Translate } from 'react-redux-i18n'
import { Typography } from '@material-ui/core'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilarDoc2VecDocs: document => postDocumentToDoc2VecApi(document, dispatch),
    getSimilarDoc2VecDocsById: (document) => {
      dispatch(setQueryDocument(document))
      return getSimilarDoc2VecDocsById(document.index, dispatch)
    }
  }
}

class Doc2VecPage extends Component {
  render () {
    return (
      <div className="flex">
          <Typography variant="title" className="page-title">
            <Translate value="doc2vec.title"/>
          </Typography>
        <GetSimilarDocsFormWrapper getSimilarDocs={this.props.getSimilarDoc2VecDocs}/>
        <QueryResult getSimilar={this.props.getSimilarDoc2VecDocsById}/>
      </div>
    )
  }
}

Doc2VecPage.propTypes = {
  getSimilarDoc2VecDocsById: PropTypes.func.isRequired,
  getSimilarDoc2VecDocs: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Doc2VecPage)
