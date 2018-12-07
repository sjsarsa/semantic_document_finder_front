import { SET_FILTERS, SET_SHOW, SET_SIMILARITY_ALGORTIHM } from '../actions/queryActions'

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
  }
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
    default:
      return state
  }
}