/*
 Query action creators
 */

export const SET_SIMILARITY_ALGORITHM = 'SET_SIMILARITY_ALGORITHM'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_SHOW = 'SET_SHOW'
export const SET_RESULT_SIZE = 'SET_RESULT_SIZE'
/*
 Query action creators
 */

export const setSimilarityAlgorithm = (algorithm) => {
  return {type: SET_SIMILARITY_ALGORITHM, algorithm}
}

export const setFilters = (filters) => {
  return {type: SET_FILTERS, filters}
}

export const setShow = show => {
  return {type: SET_SHOW, show}
}

export const setResultSize = resultSize => {
  return {type: SET_RESULT_SIZE, resultSize}
}