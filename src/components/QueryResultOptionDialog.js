import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  InputLabel,
  Dialog,
  IconButton,
  DialogActions,
  DialogContent,
  Button,
  NativeSelect,
  DialogTitle,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import { SettingsApplications } from '@material-ui/icons'
import { I18n, Translate } from 'react-redux-i18n'
import { setFilters, setShow, setSimilarityAlgorithm } from '../actions/queryActions'

function mapStateToProps (state) {
  return {
    similarityAlgorithm: state.query.algorithm,
    filters: state.query.filters,
    show: state.query.show
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setSimilarityAlgorithm: algorithm => dispatch(setSimilarityAlgorithm(algorithm)),
    setFilters: filters => dispatch(setFilters(filters)),
    setShow: show => dispatch(setShow(show))
  }
}

class QueryResultOptionDialog extends React.Component {
  state = {
    open: false,
    algorithm: this.props.similarityAlgorithm,
    filters: this.props.filters,
    show: this.props.show
  }

  handleConfirm = () => {
    this.setState({open: false})
    this.props.setSimilarityAlgorithm(this.state.algorithm)
    this.props.setFilters(this.state.filters)
    this.props.setShow(this.state.show)
  }

  renderAlgorithmSelect = () => {
    return (
      <div>
        <InputLabel shrink>
          {I18n.t('form.documentSearch.algorithm.label')}
        </InputLabel>
        <NativeSelect
          name={'algorithm'}
          fullWidth={true}
          value={this.state.algorithm}
          label={I18n.t('form.documentSearch.algorithm.label')}
          onChange={event => {this.setState({algorithm: event.target.value})}}>
          <option value="tfidf">TF-IDF</option>
          <option value="doc2vec">Doc2Vec</option>
          <option value="doc2vecc">Doc2VecC</option>
          <option value="lda">LDA</option>
        </NativeSelect>
      </div>
    )
  }

  handleFilterChange = name => event => {
    this.setState({filters: {...this.state.filters, [name]: event.target.value}})
  }

  handleShowChange = name => event => {
    this.setState({show: {...this.state.show, [name]: event.target.checked}})
  }

  renderFilterSelect = () => {
    return (
      <div>
        <InputLabel>
          {I18n.t('form.documentSearch.filter.court')}
        </InputLabel>
        <NativeSelect
          style={{marginBottom: '20px'}}
          name={'court'}
          fullWidth={true}
          value={this.state.filters.court}
          label={I18n.t('form.documentSearch.filter.court')}
          onChange={this.handleFilterChange('court')}>
          <option value="">None</option>
          <option value="kko">KKO</option>
          <option value="kho">KHO</option>
        </NativeSelect>
        <InputLabel>
          {I18n.t('form.documentSearch.filter.maxLength')}
        </InputLabel>
        <TextField
          fullWidth={true}
          value={this.state.filters.maxLength}
          onChange={this.handleFilterChange('maxLength')}
          type="number"
          variant="filled"
          inputProps={{min: 0, step: 100}}
        />
      </div>
    )
  }

  renderShowToggle = () => {
    return (
      <div>
        <FormControlLabel
          control={<Checkbox checked={this.state.show.similarity}
                             onChange={this.handleShowChange('similarity')}
                             value="similarity"/>}
          label="Similarity"
        />
        <FormControlLabel
          control={<Checkbox checked={this.state.show.wordCount}
                             onChange={this.handleShowChange('wordCount')}
                             value="wordCount"/>}
          label="Word count"
        />
      </div>
    )
  }

  render () {
    const {fullScreen} = this.props

    return (
      <div>
        <IconButton size='small' onClick={() => this.setState({open: true, algorithm: this.props.similarityAlgorithm})}>
          <SettingsApplications/>
        </IconButton>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title"><Translate value="dialog.changeAlgorithm.title"/></DialogTitle>
          <DialogContent>
            {this.renderAlgorithmSelect()}
          </DialogContent>
          <DialogTitle id="responsive-dialog-title"><Translate value="dialog.filterBy.title"/></DialogTitle>
          <DialogContent>
            {this.renderFilterSelect()}
          </DialogContent>
          <DialogTitle id="responsive-dialog-title"><Translate value="dialog.show.title"/></DialogTitle>
          <DialogContent>
            {this.renderShowToggle()}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({open: false})} color="primary">
              <Translate value="form.cancel"/>
            </Button>
            <Button onClick={this.handleConfirm} color="primary" autoFocus>
              <Translate value="form.confirm"/>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

QueryResultOptionDialog.propTypes = {
  similarityAlgorithm: PropTypes.string.isRequired,
  setSimilarityAlgorithm: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
  setShow: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryResultOptionDialog)