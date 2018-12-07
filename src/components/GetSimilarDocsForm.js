import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Button, Paper } from '@material-ui/core'
// local imports
import TextField from './material-ui-render-components/TextField'
import { Translate, I18n } from 'react-redux-i18n'
import FileUpload from './FileUpload'
import '../App.css'
import SelectField from './material-ui-render-components/SelectField'
import { postDocumentToDocApi, setQueryDocument } from '../actions/documentActions'
import { setSimilarityAlgorithm } from '../actions/queryActions'

function mapStateToProps (state) {
  const formName = 'getSimilarDocsForm'
  return {
    form: formName,
    initialValues: {title: state.document.queryDocument.title, content: state.document.queryDocument.content,
                    algorithm: state.query.algorithm},
    enableReinitialize: true,
    getExtractedTextInProgress: state.document.getExtractedTextInProgress
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSimilarDocsByQuery: (data) => {
      postDocumentToDocApi(data, data.algorithm, dispatch)
      dispatch(setQueryDocument(data))
      dispatch(setSimilarityAlgorithm(data.algorithm))
    }
  }
}

class GetSimilarDocsForm extends React.Component {

  contentRequired = value => value == null ? 'Content is required' : undefined

  onSubmit = (data) => {
    this.props.getSimilarDocsByQuery(data, data.algorithm)
    this.props.toggleShowForm()
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form className="form text-right" onSubmit={handleSubmit(this.onSubmit)}>
        <Paper>
          <div style={{padding: '10px'}}>
            <Field name="title"
                   label={I18n.t('form.documentSearch.title.label')}
                   component={TextField}
                   placeholder={I18n.t('form.documentSearch.title.placeholder')}
                   fullWidth={true}/>
          </div>
          <div style={{padding: '10px'}}>
            <Field name="content"
                   component={TextField}
                   validate={this.contentRequired}
                   placeholder={I18n.t('form.documentSearch.content.placeholder')}
                   label={I18n.t('form.documentSearch.content.label')}
                   multiline
                   fullWidth={true}
                   rows={10}/>
          </div>
          <div style={{display: 'flex'}}>
            <FileUpload/>
            <Field
              style={{marginTop: '30px', minWidth: 120}}
              name={'algorithm'}
              component={SelectField}
              fullWidth={true}
              label={I18n.t('form.documentSearch.algorithm.label')}>
              <option value="tfidf">TF-IDF</option>
              <option value="doc2vec">Doc2Vec</option>
              <option value="doc2vecc">Doc2VecC</option>
              <option value="lda">LDA</option>
            </Field>
            {!this.props.getExtractedTextInProgress &&
            <Button type="submit" variant='contained' color='primary'
                    style={{margin: '30px 0px 40px 10px', minWidth: '10%'}}>
              <Translate value="form.submit"/>
            </Button>}
            <Button onClick={this.props.toggleShowForm} variant='outlined'
                    style={{margin: '30px 10px 40px 10px', minWidth: '10%', height: '50px'}}
                    size='small'>
              <Translate value="form.cancel"/>
            </Button>
          </div>
        </Paper>

      </form>
    )
  }
}

GetSimilarDocsForm.propTypes = {
  toggleShowForm: PropTypes.func.isRequired,
  getExtractedTextInProgress: PropTypes.bool.isRequired,
  getSimilarDocsByQuery: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(reduxForm()(GetSimilarDocsForm))
