import {
  SET_ALGORITHMS,
  SET_FILTERS,
  SET_RESULT_SIZE,
  SET_SHOW,
  SET_SIMILARITY_ALGORITHM
} from '../actions/queryActions'

const initialState = {
  availableAlgorithms: [],
  algorithm: 'ensemble',
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
    case SET_SIMILARITY_ALGORITHM:
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
        resultSize: Number(action.resultSize)
      })
    case SET_ALGORITHMS:
      return Object.assign({}, state, {
        availableAlgorithms: action.algorithms
      })
    default:
      return state
  }
}