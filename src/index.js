import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createLogger }from 'redux-logger'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import thunk from 'redux-thunk'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createRootReducer from './reducers/rootReducer'
import translations from './translations'
import theme from './components/muiTheme'
import { getAlgorithms } from './actions/queryActions'

const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = createLogger({
  collapsed: true
})

const store = createStore(
  createRootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger
    ),
  ),
)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en'))
getAlgorithms(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <App history={history}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
