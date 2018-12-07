/*
 Query action creators
 */

export const SET_SIMILARITY_ALGORTIHM = 'SET_SIMILARITY_ALGORITHM'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_SHOW = 'SET_SHOW'

/*
 Query action creators
 */

export const setSimilarityAlgorithm = (algorithm) => {
  return {type: SET_SIMILARITY_ALGORTIHM, algorithm}
}

export const setFilters = (filters) => {
  return {type: SET_FILTERS, filters}
}

export const setShow = show => {
  return {type: SET_SHOW, show}
}