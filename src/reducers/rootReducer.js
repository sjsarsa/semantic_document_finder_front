import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { i18nReducer } from 'react-redux-i18n'

import { documentReducer } from './documentReducer'
import { userReducer } from './userReducer'
import { queryReducer } from './queryReducer'

const reducers = combineReducers({
  document: documentReducer,
  query: queryReducer,
  user: userReducer,
  form: formReducer,
  i18n: i18nReducer
})

export default reducers
