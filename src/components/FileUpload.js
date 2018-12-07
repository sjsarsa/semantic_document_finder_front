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

  isImage = (file) => R.contains(R.last(R.split('.', file.name)), ['jpeg', 'jpg', 'png'])

  state = {
    files: [],
    file: undefined,
    fileType: 'pdf'
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    // Only one file can be accepted at once
    const file = acceptedFiles[0]
    this.setState({file: file})
    if (this.isImage(file)) this.setState({fileType: 'image'})
    this.props.extractText(file, this.state.fileType)
  }

  render () {
    const file = this.state.file
    return (
      <div style={{display: 'flex', flexDirection: 'row', flex: '1 0', marginTop: '10px'}}>
        <Paper style={{flexDirection: 'column', flex: '1 0', margin: '10px'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Dropzone onDrop={this.onDrop} style={{height: 45, textAlign: 'left', padding: '10px', flex: 1}}>
              <Translate value="dropzone.info" style={{display: 'flex', height: 40, whiteSpace: 'pre-wrap', overflowY: 'auto'}}/>
            </Dropzone>
          </div>
          <Divider/>
          {this.props.getExtractedTextInProgress && <DelayedCircularProgress/>}
          <Typography style={{marginLeft: '10px', textAlign: 'left'}}>
            {file ?
              file.name + ' - ' + file.size + ' bytes'
              : <Translate value='dropzone.noFile'/>}
          </Typography>
          {!this.props.getExtractedTextInProgress && file && !this.props.queryDocument.title &&
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
            <option value="pdf">{I18n.t('datatype.pdf')}</option>
            <option value="image">{I18n.t('datatype.image')}</option>
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