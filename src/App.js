import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './Routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter basepath={process.env.PUBLIC_URL} history={history}>
      { routes }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App