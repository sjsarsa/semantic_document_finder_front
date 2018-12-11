import React from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import Main from './components/Main'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RateSimilarityPage from './components/GoldStandardPage'
import LoginPage from './components/LoginPage'
import DocumentSearchPage from './components/DocumentSearchPage'

const routes = (
  <div className='App'>
    <NavBar/>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Main}/>
      <Route path={process.env.PUBLIC_URL + "/login"} component={LoginPage}/>
      {/* Options need to be the same as navigation.compareDocuments in translations.js */}
      <Route path={process.env.PUBLIC_URL + "/(document-search|dokumenttihaku)"} component={DocumentSearchPage}/>
      <Route path={process.env.PUBLIC_URL + "/(compare-documents|vertaa-dokumentteja)"} component={RateSimilarityPage}/>
      <Route component={NotFound}/>
    </Switch>
    <Footer/>
  </div>
)

export default routes
