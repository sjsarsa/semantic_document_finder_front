import React from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import MainPage from './components/Pages/MainPage'
import NotFound from './components/Pages/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RateSimilarityPage from './components/Pages/GoldStandardPage'
import LoginPage from './components/Pages/LoginPage'
import DocumentSearchPage from './components/Pages/DocumentSearchPage'
import AboutPage from './components/Pages/AboutPage'

const routes = (
  <div className='App'>
    <NavBar/>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={MainPage}/>
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
