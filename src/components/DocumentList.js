import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DocumentListItem from './DocumentListItem'
import CustomPaginationActionsTable from './paging/CustomPaginationActionsTable'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

class DocumentList extends Component {

  getDocumentListItem = (document) => <DocumentListItem key={document.ecli}
                                                        document={document}/>

  renderDocumentsWithPaging () {
    return <CustomPaginationActionsTable data={this.props.documents} getListItem={this.getDocumentListItem}/>
  }

  render () {
    return (
      <ul className="flex text-left">
        {this.props.documents && this.renderDocumentsWithPaging()}
      </ul>
    )
  }

}

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList)