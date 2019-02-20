import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import green from '@material-ui/core/colors/green'
import * as R from 'ramda'

import sfLogo from '../images/sf-logo.png'
import RateSimilarityForm from './Forms/RateSimilarityForm'
import { Translate, I18n } from 'react-redux-i18n'
import Done from '@material-ui/icons/Done'

import theme from './muiTheme'
import { getSimilarDocsById, setQueryDocument } from '../actions/documentActions'

function mapStateToProps (state) {
  return {
    similarityRatings: state.user.similarityRatings,
    queryDocument: state.document.queryDocument,
    similarityAlgorithm: state.query.algorithm,
    loggedUser: state.user.loggedUser,
    show: state.query.show,
    resultSize: state.query.resultSize
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilar: (document, algorithm, resultSize) => {
      dispatch(setQueryDocument(document))
      getSimilarDocsById(document.id, algorithm, resultSize, dispatch)
    }
  }
}

const expansionClass = {
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  display: 'inline-flex',
  flexGrow: 1
}

class DocumentListItem extends Component {

  state = {
    similarityRatings: this.props.similarityRatings.sort((a, b) => new Date(b.date) - new Date(a.date))
  }

  isSameDocPair = (document1, document2) =>
    R.both(R.propEq('document1_id', document1.id), R.propEq('document2_id', document2.id))

  getRating = (document1, document2) =>
    R.find(this.isSameDocPair(document1, document2))(this.props.similarityRatings.sort((a, b) => new Date(b.date) - new Date(a.date)))

  renderDocument = () => {
    const similarityText = (this.props.document.similarity && this.props.show.similarity) ?
      ' similarity: ' + this.props.document.similarity : '' // TODO: use i18n
    const maxLengthText = this.props.show.wordCount ? ' word count: ' + this.props.document.word_count : ''

    const documentTitle = R.join(', ', R.concat([this.props.document.ecli], this.props.document.keywords.slice(0, 2)))
    return (
      <div className="flex" style={{width: '100%'}}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon/>}>
            <Typography style={expansionClass}>{documentTitle}</Typography>
            <Typography style={{textAlign: 'right'}}>
              {similarityText + maxLengthText}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography dangerouslySetInnerHTML={{__html: this.props.document.xml}}
                        style={expansionClass}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }

  renderLink () {
    return (
      <div style={{marginTop: '9px'}}>
        <Button style={{minWidth: '40px', minHeight: '40px', padding: '4px 0px'}}
                href={this.props.document.sf_link} target="_blank">
          <img style={{height: '40px', width: '40px'}}
               src={sfLogo} alt='Data finlex'/>
        </Button>
      </div>
    )
  }

  renderSimilarityForm () {
    const similarity = this.getRating(this.props.queryDocument, this.props.document)
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <Translate value="similarity.rate" style={{flexGrow: '1'}}/>
          {similarity &&
          <Done style={{color: green[900], fontSize: '15px'}}/>}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RateSimilarityForm document={this.props.document}
                              queryDocument={this.props.queryDocument}
                              rating={similarity && similarity.rating !== undefined && similarity.rating.toString()}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  renderGetSimilar () {
    return (
      <div style={{padding: '5px'}}>
        <Button style={{padding: '14px 16px', marginTop: '5px'}}
                onClick={() => this.props.getSimilar(this.props.document, this.props.similarityAlgorithm,
                                                     this.props.resultSize)}>
          <Translate value="document.getSimilar"/>
        </Button>
      </div>
    )
  }

  render () {
    return (
      <li key={this.props.document.ecli}>
        <div className="flex-row container-100">
          <div className="flex-row">
            {this.renderDocument()}
            {this.renderLink()}
            {this.props.getSimilar && this.renderGetSimilar()}
          </div>
          {this.props.document.similarity && this.props.loggedUser && this.props.queryDocument
           && this.props.queryDocument.id !== undefined &&
          <div className="flex-column align-top" style={{maxWidth: '30%', padding: '10px', marginRight: '20px'}}>
            {this.renderSimilarityForm()}
          </div>}
        </div>
      </li>
    )
  }
}

DocumentListItem.propTypes = {
  similarityRatings: PropTypes.array.isRequired,
  document: PropTypes.object.isRequired,
  queryDocument: PropTypes.object,
  getSimilar: PropTypes.func,
  similarityAlgorithm: PropTypes.string,
  resultSize: PropTypes.number.isRequired,
  show: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentListItem)