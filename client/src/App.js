import React from "react"
import "./App.css"

import InitialPage from "./components/InitialPage/InitialPage"
import Home from "./components/Home/Home"
import Countries from "./components/Countries/Countries"
import CountriesSearch from "./components/CountriesSearch/CountriesSearch"
import CountryDetails from "./components/CountryDetails/CountryDetails"

import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route path="/countries">
        <header className="App-header">
          <Home />
        </header>
        <Countries />
        <CountriesSearch/>
      </Route>
      <Route path="/country/:id" component={CountryDetails} />
    </div>
  )
}

export default App
