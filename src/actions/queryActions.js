import axios from 'axios'

import { handleHttpError, PYTHON_API_URL } from './actionUtil'

/*
 Query action creators
 */

export const SET_SIMILARITY_ALGORITHM = 'SET_SIMILARITY_ALGORITHM'
export const SET_FILTERS = 'SET_FILTERS'
export const SET_SHOW = 'SET_SHOW'
export const SET_RESULT_SIZE = 'SET_RESULT_SIZE'
export const SET_ALGORITHMS  = 'SET_ALGORITHMS'
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

export const setAlgorithms = (algorithms) => {
  return {type: SET_ALGORITHMS, algorithms}
}

export function getAlgorithms (dispatch) {
  return axios.get(PYTHON_API_URL + '/algorithms').then(
    response => dispatch(setAlgorithms(response.data.algorithms)),
    error => { handleHttpError(error) }
  )
}
