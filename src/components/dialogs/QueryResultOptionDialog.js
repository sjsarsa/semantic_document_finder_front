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
import { setFilters, setResultSize, setShow, setSimilarityAlgorithm } from '../../actions/queryActions'
import { getSimilarDocsById, postDocumentToDocApi } from '../../actions/documentActions'

function mapStateToProps (state) {
  return {
    algorithms: state.query.availableAlgorithms,
    queryDocument: state.document.queryDocument,
    similarityAlgorithm: state.query.algorithm,
    filters: state.query.filters,
    show: state.query.show,
    resultSize: state.query.resultSize
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateQueryResults: (document, algorithm, resultSize) => {
      if (document.content) postDocumentToDocApi(document, algorithm, resultSize, dispatch)
      if (document.id) getSimilarDocsById(document.id, algorithm, resultSize, dispatch)
    },
    setSimilarityAlgorithm: algorithm => dispatch(setSimilarityAlgorithm(algorithm)),
    setFilters: filters => dispatch(setFilters(filters)),
    setShow: show => dispatch(setShow(show)),
    setResultSize: resultSize => dispatch(setResultSize(resultSize))
  }
}

class QueryResultOptionDialog extends React.Component {
  state = {
    open: false,
    algorithm: this.props.similarityAlgorithm,
    filters: this.props.filters,
    show: this.props.show,
    resultSize: this.props.resultSize
  }

  handleConfirm = () => {
    this.setState({open: false})
    this.props.setSimilarityAlgorithm(this.state.algorithm)
    this.props.setFilters(this.state.filters)
    this.props.setShow(this.state.show)
    this.props.setResultSize(this.state.resultSize)
    if (this.state.algorithm !== this.props.similarityAlgorithm ||
        this.state.resultSize !== this.props.resultSize) {
        this.props.updateQueryResults(this.props.queryDocument, this.state.algorithm, this.state.resultSize)
    }
  }

  renderAlgorithmSelect = () => {
    return (
      <div style={{overflowY: 'auto'}}>
        <InputLabel shrink>
          {I18n.t('form.documentSearch.algorithm.label')}
        </InputLabel>
        <NativeSelect
          style={{marginBottom: '20px'}}
          name={'algorithm'}
          fullWidth={true}
          value={this.state.algorithm}
          label={I18n.t('form.documentSearch.algorithm.label')}
          onChange={event => this.setState({algorithm: event.target.value})}>
          {this.props.algorithms.map(algorithm =>
            <option value={algorithm} key={algorithm}>{I18n.t('algorithm.' + algorithm)}</option>
          )}
        </NativeSelect>
        <InputLabel>
          {I18n.t('form.documentSearch.resultSize.label')}
        </InputLabel>
        <TextField
          value={this.state.resultSize}
          onChange={event => this.setState({resultSize: event.target.value})}
          type="number"
          inputProps={{min: 0, step: 100}}/>
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
          value={this.state.filters.maxLength}
          onChange={this.handleFilterChange('maxLength')}
          type="number"
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

  showOverflow = {
    overflow: 'visible',
    padding: '12px',
    width: '100%'
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
          PaperProps={{style:{flexDirection: 'row'}}}
          aria-labelledby="responsive-dialog-title">
          <DialogTitle style={this.showOverflow} id="responsive-dialog-title"><Translate value="dialog.changeAlgorithm.title"/></DialogTitle>
          <DialogContent style={this.showOverflow}>{this.renderAlgorithmSelect()}</DialogContent>

          <DialogTitle style={this.showOverflow} id="responsive-dialog-title"><Translate value="dialog.filterBy.title"/></DialogTitle>
          <DialogContent style={this.showOverflow}>{this.renderFilterSelect()}</DialogContent>

          <DialogTitle style={this.showOverflow} id="responsive-dialog-title"><Translate value="dialog.show.title"/></DialogTitle>
          <DialogContent style={this.showOverflow}>{this.renderShowToggle()}</DialogContent>

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
  setShow: PropTypes.func.isRequired,
  setResultSize: PropTypes.func.isRequired,
  resultSize: PropTypes.number.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryResultOptionDialog)