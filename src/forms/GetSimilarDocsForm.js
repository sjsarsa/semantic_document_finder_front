import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Button, Paper, Typography } from '@material-ui/core'
// local imports
import TextField from '../components/material-ui-render-components/TextField'
import { Translate, I18n } from 'react-redux-i18n'
import FileUpload from '../components/FileUpload'
import '../App.css'
import SelectField from '../components/material-ui-render-components/SelectField'
import { postDocumentToDocApi, setQueryDocument } from '../actions/documentActions'
import { setResultSize, setSimilarityAlgorithm } from '../actions/queryActions'

function mapStateToProps (state) {
  const formName = 'getSimilarDocsForm'
  return {
    form: formName,
    initialValues: {
      title: state.document.queryDocument.title, content: state.document.queryDocument.content,
      algorithm: state.query.algorithm, resultSize: state.query.resultSize
    },
    algorithms: state.query.availableAlgorithms,
    enableReinitialize: true,
    getExtractedTextInProgress: state.document.getExtractedTextInProgress,
    resultSize: state.query.resultSize,
    title: state.document.queryDocument.title,
    resultDocuments: state.document.similarDocuments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilarDocsByQuery: (data) => {
      dispatch(setResultSize(data.resultSize))
      postDocumentToDocApi(data, data.algorithm, data.resultSize, dispatch)
      dispatch(setQueryDocument(data))
      dispatch(setSimilarityAlgorithm(data.algorithm))
    }
  }
}

class GetSimilarDocsForm extends React.Component {

  contentRequired = value => value == null ? 'Content is required' : undefined

  onSubmit = (data) => {
    this.props.getSimilarDocsByQuery(data)
    this.props.toggleShowForm()
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form className="form text-right" onSubmit={handleSubmit(this.onSubmit)}>
        <Paper>
          {this.props.title &&
          <div style={{padding: '10px'}}>
            <Field name="title"
                   label={I18n.t('form.documentSearch.title.label')}
                   component={TextField}
                   placeholder={I18n.t('form.documentSearch.title.placeholder')}
                   fullWidth={true}
                   disabled={true}/>
          </div>}
          <div style={{padding: '10px'}}>
              <Typography variant="h5" style={{display: 'flex', whiteSpace: 'pre-wrap', overflowY: 'hidden', padding: '5px'}}>
                  <Translate value="form.documentSearch.content.label" />
              </Typography>
              <Paper style={{padding: '10px'}}>
                <Field name="content"
                       component={TextField}
                       validate={this.contentRequired}
                       placeholder={I18n.t('form.documentSearch.content.placeholder')}
                       label={I18n.t('form.documentSearch.content.label')}
                       autosize
                       rows='7'
                       style= {{resize: 'none', border: 'none', width: '100%'}}/>
              </Paper>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
              <Typography variant="h5" style={{display: 'flex', whiteSpace: 'pre-wrap', overflowY: 'hidden', padding: '5px'}}>
                  <Translate value="dropzone.title" />
              </Typography>
              <FileUpload/>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{display: 'flex', flex: 1, padding: '10px'}}>
                <Field
                  style={{marginLeft: '10px', marginTop: '10px', minWidth: 120}}
                  name={'algorithm'}
                  component={SelectField}
                  label={I18n.t('form.documentSearch.algorithm.label')}>
                  {this.props.algorithms.map(algorithm =>
                    <option value={algorithm} key={algorithm}>{I18n.t('algorithm.' + algorithm)}</option>
                  )}
                </Field>
                <Field
                  style={{marginLeft: '20px', marginTop: '10px', width: 100}}
                  name={'resultSize'}
                  component={TextField}
                  type="number"
                  inputProps={{min: 0, step: 100}}
                  label={I18n.t('form.documentSearch.resultSize.label')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
              </div>
              <div style={{display: 'flex'}}>
                {!this.props.getExtractedTextInProgress &&
                <Button type="submit" variant='contained' color='primary'
                        style={{margin: '10px 20px', minWidth: '10%', height: '50px', width: '100px'}}>
                  <Translate value="form.submit"/>
                </Button>}
                {this.props.resultDocuments.length > 0 &&
                <Button onClick={this.props.toggleShowForm} variant='outlined'
                        style={{margin: '10px 20px 0px 0px', minWidth: '10%', height: '50px', width: '100px'}}
                        size='small'>
                  <Translate value="form.cancel"/>
                </Button>}
              </div>
            </div>
          </div>
        </Paper>
      </form>
    )
  }
}

GetSimilarDocsForm.propTypes = {
  toggleShowForm: PropTypes.func.isRequired,
  getExtractedTextInProgress: PropTypes.bool.isRequired,
  getSimilarDocsByQuery: PropTypes.func.isRequired,
  resultDocuments: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(reduxForm()(GetSimilarDocsForm))
