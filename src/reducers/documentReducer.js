import {
  GET_DOCUMENTS,
  GET_SIMILAR_DOCS_STARTED,
  GET_SIMILAR_DOCS_FAILED,
  GET_SIMILAR_DOCS_SUCCESSFUL,
  SET_QUERY_DOCUMENT,
  GET_EXTRACTED_TEXT_STARTED,
  GET_EXTRACTED_TEXT_SUCCESSFUL,
  GET_EXTRACTED_TEXT_FAILED,
  GET_RATING_DOCUMENTS_STARTED,
  GET_RATING_DOCUMENTS_SUCCESSFUL,
  GET_RATING_DOCUMENTS_FAILED
} from '../actions/documentActions'

const initialState = {
  all_documents: [],
  getSimilarDocumentsInProgress: false,
  similarDocuments: [],
  queryDocument: {},
  ratingDocuments: [],
  getRatingDocumentsInProgress: false,
  getExtractedTextInProgress: false,
}

export function documentReducer (state = initialState, action) {
  switch (action.type) {
    case GET_DOCUMENTS:
      return Object.assign({}, state, {
        all_documents: action.documents
      })

    case GET_SIMILAR_DOCS_STARTED:
      return Object.assign({}, state, {
        getSimilarDocumentsInProgress: true
      })
    case GET_SIMILAR_DOCS_FAILED:
      return Object.assign({}, state, {
        getSimilarDocumentsInProgress: false
      })
    case GET_SIMILAR_DOCS_SUCCESSFUL:
      return Object.assign({}, state, {
        similarDocuments: action.documents,
        getSimilarDocumentsInProgress: false
      })

    case SET_QUERY_DOCUMENT:
      return Object.assign({}, state, {
        queryDocument: action.document
      })

    case GET_RATING_DOCUMENTS_STARTED:
      return Object.assign({}, state, {
        getRatingDocumentInProgress: true
      })
    case GET_RATING_DOCUMENTS_SUCCESSFUL:
      return Object.assign({}, state, {
        getRatingDocumentInProgress: false,
        ratingDocuments: action.documents
      })
    case GET_RATING_DOCUMENTS_FAILED:
      return Object.assign({}, state, {
        getRatingDocumentInProgress: false
      })

    case GET_EXTRACTED_TEXT_STARTED:
      return Object.assign({}, state, {
        getExtractedTextInProgress: true
      })
    case GET_EXTRACTED_TEXT_SUCCESSFUL:
      return Object.assign({}, state, {
        getExtractedTextInProgress: false,
        queryDocument: action.document
      })
    case GET_EXTRACTED_TEXT_FAILED:
      return Object.assign({}, state, {
        getExtractedTextInProgress: false
      })

    default:
      return state
  }
}