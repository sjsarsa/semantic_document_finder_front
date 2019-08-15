import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { i18nReducer } from 'react-redux-i18n'
import { connectRouter } from 'connected-react-router'
import { documentReducer } from './documentReducer'
import { userReducer } from './userReducer'
import { queryReducer } from './queryReducer'

const reducers = (history) => combineReducers({
  document: documentReducer,
  query: queryReducer,
  user: userReducer,
  form: formReducer,
  i18n: i18nReducer,
  router: connectRouter(history)
})

export default reducers
