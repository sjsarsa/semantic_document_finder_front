import axios from 'axios'

import { handleHttpError, PYTHON_API_URL } from './actionUtil'

/*
  Document action types
 */

export const GET_DOCUMENTS = 'GET_DOCUMENTS'
export const GET_SIMILAR_DOCS_STARTED = 'GET_SIMILAR_DOCS_STARTED'
export const GET_SIMILAR_DOCS_FAILED = 'GET_SIMILAR_DOCS_FAILED'
export const GET_SIMILAR_DOCS_SUCCESSFUL = 'GET_SIMILAR_DOCS_SUCCESSFUL'
export const POST_SIMILARITY_RATING_SUCCESSFUL = 'POST_SIMILARITY_RATING_SUCCESSFUL'
export const SET_QUERY_DOCUMENT = 'SET_QUERY_DOCUMENT'
export const GET_RATING_DOCUMENTS_STARTED = 'GET_RATING_DOCUMENTS_STARTED'
export const GET_RATING_DOCUMENTS_SUCCESSFUL = 'GET_RATING_DOCUMENTS_SUCCESSFUL'
export const GET_RATING_DOCUMENTS_FAILED = 'GET_RATING_DOCUMENTS_FAILED'
export const GET_EXTRACTED_TEXT_STARTED = 'GET_EXTRACTED_TEXT_STARTED'
export const GET_EXTRACTED_TEXT_SUCCESSFUL = 'GET_EXTRACTED_TEXT_SUCCESSFUL'
export const GET_EXTRACTED_TEXT_FAILED = 'GET_EXTRACTED_TEXT_FAILED'

/*
 Document action creators
 */

export const getDocuments = (documents) => {
  return {type: GET_DOCUMENTS, documents}
}

export const getSimilarDocsStarted = () => {
  return {type: GET_SIMILAR_DOCS_STARTED}
}

export const getSimilarDocsFailed = () => {
  return {type: GET_SIMILAR_DOCS_FAILED}
}

export const getSimilarDocsSuccessful = (documents) => {
  return {type: GET_SIMILAR_DOCS_SUCCESSFUL, documents}
}

export const postDocumentSimilaritySuccessful = (rating) => {
  return {type: POST_SIMILARITY_RATING_SUCCESSFUL, rating}
}

export const setQueryDocument = (document) => {
  return {type: SET_QUERY_DOCUMENT, document}
}

export const getRatingDocumentStarted = () => {
  return {type: GET_RATING_DOCUMENTS_STARTED}
}

export const getRatingDocumentsSuccessful = (documents) => {
  return {type: GET_RATING_DOCUMENTS_SUCCESSFUL, documents}
}

export const getRatingDocumentsFailed = () => {
  return {type: GET_RATING_DOCUMENTS_FAILED}
}

export const get_extracted_text_started = () => {
  return {type: GET_EXTRACTED_TEXT_STARTED}
}

export const get_extracted_text_successful = (document) => {
  return {type: GET_EXTRACTED_TEXT_SUCCESSFUL, document}
}

export const get_extracted_text_failed = () => {
  return {type: GET_EXTRACTED_TEXT_FAILED}
}

/*
  HTTP actions
 */
export function postDocumentToDocApi (document, modelName, dispatch) {
  dispatch(getSimilarDocsStarted())

  return axios.post(PYTHON_API_URL + '/top-similar/' + modelName, {
    document: document
  }).then(
    response => {dispatch(getSimilarDocsSuccessful(response.data.documents))},
    error => {
      dispatch(getSimilarDocsFailed())
      handleHttpError(error)
    }
  )
}

export function getSimilarDocsById (id, modelName, dispatch) {
  dispatch(getSimilarDocsStarted())

  return axios.get(PYTHON_API_URL + '/top-similar/' + modelName + '/' + id).then(
    response => dispatch(getSimilarDocsSuccessful(response.data.documents)),
    error => {
      dispatch(getSimilarDocsFailed())
      handleHttpError(error)
    }
  )
}

export function postDocumentSimilarity (documentSimilarity, dispatch) {
  return axios(PYTHON_API_URL + '/document-similarity', {
    method: 'post',
    data: documentSimilarity,
    withCredentials: true
  }).then(
    response => dispatch(postDocumentSimilaritySuccessful(response.data)),
    error => handleHttpError(error)
  )
}

//TODO: define which documents to receive in backend
export function getGoldStandardDocuments (dispatch) {
  dispatch(getRatingDocumentStarted())
  return axios(PYTHON_API_URL + '/documents/gold-standard-set', {
    method: 'get',
    withCredentials: true
  }).then(
    response => dispatch(getRatingDocumentsSuccessful(response.data.documents)),
    error => {
      dispatch(getRatingDocumentsFailed())
      handleHttpError(error)
    }
  )
}

export function getExtractedText (file, type, dispatch) {
  let formData = new FormData()
  formData.append('file', file)
  dispatch(get_extracted_text_started())
  return axios(PYTHON_API_URL + '/extract_text/' + type, {
    method: 'post',
    data: formData,
    withCredentials: true
  }).then(
    response => dispatch(get_extracted_text_successful(response.data.document)),
    error => {
      handleHttpError(error)
      dispatch(get_extracted_text_failed())
    }
  )
}