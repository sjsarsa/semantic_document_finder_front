import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import { FormControl, FormControlLabel } from '@material-ui/core/'
import RadioGroup from '../material-ui-render-components/RadioGroup'
import PropTypes from 'prop-types'

import { postDocumentSimilarity } from '../../actions/documentActions'
import SimilarityRatingInfoDialog from '../Dialogs/SimilarityRatingInfoDialog'
import { I18n, Translate } from 'react-redux-i18n'
import InfoDialog from '../Dialogs/InfoDialog'

// local imports

function mapStateToProps (state, ownProps) {
  const formName = 'rateSimilarityForm:' + ownProps.document.ecli

  return {
    ownProps,
    form: formName,
    loggedUser: state.user.loggedUser,
    initialValues: {similarity: ownProps.rating && "" + ownProps.rating}
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postSimilarityRating: (documentSimilarity) => postDocumentSimilarity(documentSimilarity, dispatch)
  }
}

class RateSimilarityForm extends React.Component {

  state = {
    similarity: undefined
  }

  ratingRequired = value => value == null ? 'Similarity rating is required' : undefined

  onSubmit = (data) => {
    const queryDocument = this.props.queryDocument
    const resultDocument = this.props.document
    this.props.postSimilarityRating({
      username: this.props.loggedUser,
      document1_id: queryDocument.id,
      document2_id: resultDocument.id,
      rating: data.similarity,
    })
  }

  handleChange = event => {
    this.setState({similarity: event.target.value})
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form className="form align-top" onSubmit={handleSubmit(this.onSubmit)}>
        <div style={{flex: '1 1 auto', maxWidth: '100%'}}>
          <FormControl>
            <Field name="similarity"
                   validate={this.ratingRequired}
                   component={RadioGroup}
                   label="Similarity"
                   value="">

              {Array.from({length: 6}, (v, i) => i).reverse().map(i => {
                return <FormControlLabel onChange={this.handleChange} key={i} value={i.toString()}
                                         control={<Radio color="primary"/>}
                                         label={I18n.t('similarity.' + i)}/>
              })}
            </Field>
          </FormControl>
        </div>
        <div style={{marginTop: '20px', display: 'flex', flex: '0 1 auto', flexDirection: 'row'}}>
          <div style={{flexGrow: '1', maxWidth: '50%'}}>
            <InfoDialog buttonTitle={I18n.t("info")}
                        info="similarity" contentKeys={["ratingDocuments", "ratingSubmission"]}/>
          </div>
          <div style={{maxWidth: '50%'}}>
            <Button type="submit" style={{alignSelf: 'flex-end', minWidth: '50px'}}><Translate
              value="form.submit"/></Button>
          </div>
        </div>
      </form>
    )
  }
}

RateSimilarityForm.propTypes = {
  postSimilarityRating: PropTypes.func.isRequired,
  loggedUser: PropTypes.string.isRequired,
  document: PropTypes.object.isRequired,
  queryDocument: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm()(RateSimilarityForm))
