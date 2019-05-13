import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Paper, Typography, NativeSelect, InputLabel, FormControl, Divider } from '@material-ui/core'
import Dropzone from 'react-dropzone'
import { Translate, I18n } from 'react-redux-i18n'
import * as R from 'ramda'

import { getExtractedText } from '../actions/documentActions'
import DelayedCircularProgress from './material-ui-render-components/DelayedCircularProgress'

function mapStateToProps (state) {
  return {
    getExtractedTextInProgress: state.document.getExtractedTextInProgress,
    queryDocument: state.document.queryDocument
  }
}

function mapDispatchToProps (dispatch) {
  return {
    extractText: (file, type) => getExtractedText(file, type, dispatch)
  }
}

class FileUpload extends React.Component {

  // TODO: automatically set file format by extension (maybe)
  isImage = (file) => R.contains(R.last(R.split('.', file.name)), ['jpeg', 'jpg', 'png'])
  isTxt = (file) => R.contains(R.last(R.split('.', file.name)), ['txt']) || !R.contains(['.'])
  isXml = (file) => R.contains(R.last(R.split('.', file.name)), ['xml'])
  isPdf = (file) => R.contains(R.last(R.split('.', file.name)), ['pdf'])

  state = {
    files: [],
    file: undefined,
    fileType: 'txt'
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    // Only one file can be accepted at once
    const file = acceptedFiles[0]
    this.setState({file: file})
    this.props.extractText(file, this.state.fileType)
  }

  render () {
    const file = this.state.file
    return (
      <div style={{display: 'flex', flexDirection: 'row', flex: '1 0', marginTop: '10px'}}>
        <Paper style={{flexDirection: 'column', flex: '1 0', margin: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Dropzone onDrop={this.onDrop} style={{height: 130, textAlign: 'left', padding: '10px', flex: 1, cursor: 'pointer'}}>
              <Typography variant="title" style={{display: 'flex', whiteSpace: 'pre-wrap', overflowY: 'hidden'}}>
              <Translate value="dropzone.title" />
              </Typography>
              <Typography style={{display: 'flex', whiteSpace: 'pre-wrap', overflowY: 'auto', marginTop: '1%'}}>
                <Translate value="dropzone.info" style={{display: 'flex', whiteSpace: 'pre-wrap', overflowY: 'auto'}}/>
              </Typography>
            </Dropzone>
          </div>
          <Divider/>
          {this.props.getExtractedTextInProgress && <DelayedCircularProgress/>}
          <Typography style={{marginLeft: '10px', textAlign: 'left'}}>
            {file ?
              file.name + ' - ' + file.size + ' bytes'
              : <Translate value='dropzone.noFile'/>}
          </Typography>
          {!this.props.getExtractedTextInProgress && file && this.props.queryDocument.title !== file.name &&
          <Typography style={{marginLeft: '10px', textAlign: 'left', color: 'red'}}>
            <Translate value='dropzone.extractTextFailed'/>
          </Typography>}
        </Paper>

        <FormControl style={{margin: '20px', minWidth: 120}}>
          <InputLabel>
            <Translate value="dropzone.select"/>
          </InputLabel>
          <NativeSelect
            name={'fileType'}
            fullWidth={true}
            value={this.state.fileType}
            onChange={event => {this.setState({fileType: event.target.value})}}>
            <option value="txt">{I18n.t('datatype.txt')}</option>
            <option value="xml">{I18n.t('datatype.xml')}</option>
            <option value="pdf">{I18n.t('datatype.pdf')}</option>
            <option value="img">{I18n.t('datatype.image')}</option>
          </NativeSelect>
        </FormControl>
      </div>
    )
  }
}

FileUpload.propTypes = {
  getExtractedTextInProgress: PropTypes.bool.isRequired,
  queryDocument: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)