import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import DelayedCircularProgress from './material-ui-render-components/DelayedCircularProgress'
import Divider from '@material-ui/core/Divider'
import * as R from 'ramda'

import '../App.css'
import DocumentList from './DocumentList'
import { findDOMNode } from 'react-dom'
import { Translate } from 'react-redux-i18n'
import QueryResultOptionDialog from './Dialogs/QueryResultOptionDialog'

function mapStateToProps (state) {
  return {
    queryDocument: state.document.queryDocument,
    getSimilarDocumentsInProgress: state.document.getSimilarDocumentsInProgress,
    similarDocuments: state.document.similarDocuments,
    queryFilters: state.query.filters
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

class QueryResult extends Component {
  componentDidUpdate () {
    const listNode = findDOMNode(this.refs.list)
    listNode && listNode.scrollIntoView()
  }

  state = {
    showQueryDocument: false
  }

  toggleShowQueryDocument = () => {
    this.setState({
      showQueryDocument: !this.state.showQueryDocument
    })
  }

  renderQueryDocument = (queryDocument) => {
    return (
      <Paper style={{minWidth: '30%', marginTop: '20px', marginBottom: '20px', maxHeight: 'none'}}>
        <Button style={{float: 'right'}} onClick={this.toggleShowQueryDocument} autoFocus>
          <Translate value="hide"/>
        </Button>
        {queryDocument.xml ?
          <div style={{padding: '10px'}} dangerouslySetInnerHTML={{__html: queryDocument.xml}}/>
          :
          <div><Typography variant='title'>{queryDocument.title}</Typography>
            <Typography style={{padding: '10px', whiteSpace: 'pre-wrap'}}>{queryDocument.content}</Typography>
          </div>
        }
      </Paper>
    )
  }

  filterDocumentList = (documents) => {
    const court = this.props.queryFilters.court
    const maxLength = this.props.queryFilters.maxLength
    let filteredDocuments = court? R.filter(x => x.court === court, documents) : documents
    filteredDocuments = maxLength? R.filter(x => x.word_count <= maxLength, documents) : filteredDocuments

    return filteredDocuments
  }


  renderResult = () => {
    return (
      <Paper style={{padding: '10px', margin: '20px', maxHeight: 'none'}}>
        <div style={{display: 'flex'}}>
          <Typography variant='title' style={{padding: '20px', flexGrow: 1}}><Translate
            value="document.mostSimilar"/></Typography>
          <QueryResultOptionDialog/>
        </div>
        <Divider/>
        <div className="flex-row container-100">
          {this.state.showQueryDocument ?
            this.renderQueryDocument(this.props.queryDocument)
            :
            <Button style={{maxWidth: '10%', fontSize: '10', marginTop: '20px', marginBottom: '20px'}}
                    onClick={this.toggleShowQueryDocument}>
              <Translate value="document.showQuery"/>
            </Button>}
          <div ref={'list'} style={{flex: '1 1 auto'}}>
            <DocumentList documents={this.filterDocumentList(this.props.similarDocuments)}/>
          </div>
        </div>
      </Paper>
    )
  }

  render () {
    return this.props.getSimilarDocumentsInProgress ?
      <DelayedCircularProgress/>
      :
      this.props.similarDocuments.length === 0 ?
        <div/>
        : this.renderResult()
  }
}

QueryResult.propTypes = {
  queryDocument: PropTypes.object.isRequired,
  queryFilters: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryResult)