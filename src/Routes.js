import React from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RateSimilarityPage from './pages/GoldStandardPage'
import LoginPage from './pages/LoginPage'
import DocumentSearchPage from './pages/DocumentSearchPage'
import AboutPage from './pages/AboutPage'

const routes = (
  <div className='App'>
    <NavBar/>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={DocumentSearchPage}/>
      <Route path={process.env.PUBLIC_URL + "/login"} component={LoginPage}/>
      <Route path={process.env.PUBLIC_URL + "/about"} component={AboutPage}/>
      {/* Options need to be the same as navigation.compareDocuments in translations.js */}
      <Route path={process.env.PUBLIC_URL + "/(document-search|dokumenttihaku)"} component={DocumentSearchPage}/>
      <Route path={process.env.PUBLIC_URL + "/(compare-documents|vertaa-dokumentteja)"} component={RateSimilarityPage}/>
      <Route component={NotFound}/>
    </Switch>
    <Footer/>
  </div>
)

export default routes
