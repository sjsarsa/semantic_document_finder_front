import { SET_FILTERS, SET_RESULT_SIZE, SET_SHOW, SET_SIMILARITY_ALGORTIHM } from '../actions/queryActions'

const initialState = {
  algorithm: 'tfidf',
  filters: {
    'court': undefined,
    'contains': undefined,
    'maxLength': ""
  },
  show: {
    'similarity': true,
    'wordCount': false
  },
  resultSize: 100
}

export function queryReducer (state = initialState, action) {
  switch (action.type) {
    case SET_SIMILARITY_ALGORTIHM:
      return Object.assign({}, state, {
        algorithm: action.algorithm
      })
    case SET_FILTERS:
      return Object.assign({}, state, {
        filters: action.filters
      })
    case SET_SHOW:
      return Object.assign({}, state, {
        show: action.show
      })
    case SET_RESULT_SIZE:
      return Object.assign({}, state, {
        resultSize: action.resultSize
      })
    default:
      return state
  }
}