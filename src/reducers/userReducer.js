import * as R from 'ramda'

import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESSFUL, FETCH_USER_UNSUCCESSFUL,
  GET_USER_SIMILARITY_RATINGS_SUCCESSFUL, LOGIN_STARTED,
  LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL,
  LOGOUT_SUCCESSFUL, SIGNIN_STARTED, SIGNIN_SUCCESSFUL, SIGNIN_UNSUCCESSFUL
} from '../actions/userActions'
import { POST_SIMILARITY_RATING_SUCCESSFUL } from '../actions/documentActions'

const initialState = {
  loggedUser: null,
  loginInProgress: false,
  getLoggedUserInProgress: false,
  similarityRatings: [],
  loginError: null,
  signinError: null,
  signinSuccess: null
}

export function userReducer (state = initialState, action) {
  switch(action.type) {
    case SIGNIN_STARTED:
      return Object.assign({}, state, {
        signinInProgress: true,
        signinError: null
      })
    case SIGNIN_SUCCESSFUL:
      return Object.assign({}, state, {
        signingInProgress: false,
        signinError: null,
        signinSuccess: action.message
      })
    case SIGNIN_UNSUCCESSFUL:
      return Object.assign({}, state, {
        signingInProgress: false,
        signinError: action.error
      })
    case LOGIN_STARTED:
      return Object.assign({}, state, {
        loginInProgress: true,
        loginError: null
      })
    case LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
        loginInProgress: false,
        loggedUser: action.username,
        loginError: null
      })
    case LOGIN_UNSUCCESSFUL:
      return Object.assign({}, state, {
        loginInProgress: false,
        loginError: action.error
      })
    case LOGOUT_SUCCESSFUL:
      return Object.assign({}, state, {
        loggedUser: null,
        similarityRatings: []
      })
    case GET_USER_SIMILARITY_RATINGS_SUCCESSFUL:
      return Object.assign({}, state, {
        similarityRatings: action.ratings
      })
    case FETCH_USER_STARTED:
      return Object.assign({}, state, {
        getLoggedUserInProgress: true
      })
    case FETCH_USER_SUCCESSFUL:
      return Object.assign({}, state, {
        loggedUser: action.username,
        getLoggedUserInProgress: false
      })
    case FETCH_USER_UNSUCCESSFUL:
      return Object.assign({}, state, {
        getLoggedUserInProgress: false
      })
    case POST_SIMILARITY_RATING_SUCCESSFUL:
      return Object.assign({}, state, {
        similarityRatings: R.append(action.rating, state.similarityRatings)
      })
    default:
      return state
  }
}