import axios from 'axios'
import { PYTHON_API_URL, handleHttpError } from './actionUtil'

export const SIGNIN_STARTED = 'SIGNIN_STARTED'
export const SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL'
export const SIGNIN_UNSUCCESSFUL = 'SIGNIN_UNSUCCESSFUL'

export const LOGIN_STARTED = 'LOGIN_STARTED'
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL'
export const LOGIN_UNSUCCESSFUL = 'LOGOUT_UNSUCCESSFUL'

export const FETCH_USER_STARTED = 'FETCH_USER_STARTED'
export const FETCH_USER_SUCCESSFUL = 'FETCH_USER_SUCCESSFUL'
export const FETCH_USER_UNSUCCESSFUL = 'FETCH_USER_UNSUCCESSFUL'

export const LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL'
export const GET_USER_SIMILARITY_RATINGS_SUCCESSFUL = 'GET_USER_SIMILARITY_RATINGS_SUCCESSFUL'


export const signinStarted = () => {
  return {type: SIGNIN_STARTED}
}

export const signinSuccessful = (message) => {
  return {type: SIGNIN_SUCCESSFUL, message}
}

export const signinUnsuccessful = (error) => {
  return {type: SIGNIN_UNSUCCESSFUL, error}
}

export const loginStarted = () => {
  return {type: LOGIN_STARTED}
}

export const loginSuccessful = (username) => {
  return {type: LOGIN_SUCCESSFUL, username}
}

export const loginUnsuccessful = (error) => {
  return {type: LOGIN_UNSUCCESSFUL, error}
}

export const fetchUserStarted = () => {
  return {type: FETCH_USER_STARTED}
}

export const fetchUserSuccessful = (username) => {
  return {type: FETCH_USER_SUCCESSFUL, username}
}

export const fetchUserUnsuccessful = (username) => {
  return {type: FETCH_USER_UNSUCCESSFUL, username}
}

export const logoutSuccessful = () => {
  return {type: LOGOUT_SUCCESSFUL}
}

export const getUserSimilarityRatingsSuccessful = (ratings) => {
  return {type: GET_USER_SIMILARITY_RATINGS_SUCCESSFUL, ratings}
}

/*
  HTTP actions
 */

export function signin(dispatch, username, password) {
  dispatch(signinStarted())
  return axios(PYTHON_API_URL + '/signin', {
    method: 'post',
    data: {username: username, password: password},
    withCredentials: true
  }).then(
    response => dispatch(signinSuccessful(response.data)),
    error => {
      handleHttpError(error)
      dispatch(signinUnsuccessful(error.response))
    }
  )
}

export function login(dispatch, username, password) {
  dispatch(loginStarted())
  return axios(PYTHON_API_URL + '/login', {
    method: 'post',
    data: {username: username, password: password},
    withCredentials: true
  }).then(
    response => dispatch(loginSuccessful(username)),
    error => {
      handleHttpError(error)
      dispatch(loginUnsuccessful(error.response))
    }
  )
}

export function logout(dispatch) {
  return axios(PYTHON_API_URL + '/logout', {
    method: 'get',
    withCredentials: true
  }).then(
    response => dispatch(logoutSuccessful()),
    error => handleHttpError(error)
  )
}

export function getUser(dispatch) {
  dispatch(fetchUserStarted())

  return axios(PYTHON_API_URL + '/logged-in', {
    method: 'get',
    withCredentials: true
  }).then(
    response => dispatch(fetchUserSuccessful(response.data.username)),
    error => {
      dispatch(fetchUserUnsuccessful())
      handleHttpError(error)
    }
  )
}

export function getUserRatings(dispatch) {
  return axios(PYTHON_API_URL + '/user-similarity-ratings', {
    method: 'get',
    withCredentials: true
  }).then(
    response => dispatch(getUserSimilarityRatingsSuccessful(response.data.ratings)),
    error => handleHttpError(error)
  )
}
