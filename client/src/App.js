import React from "react"
import "./App.css"

import InitialPage from "./components/InitialPage/InitialPage"
import Home from "./components/Home/Home"
import Countries from "./components/Countries/Countries"
import CountriesSearch from "./components/CountriesSearch/CountriesSearch"
import CountryDetails from "./components/CountryDetails/CountryDetails"
import FilterByContinent from "./components/FilterByContinent/FilterByContinent"

import Pages from "./components/Pages/Pages"

import { Route } from "react-router-dom"
import FilterByTouristActivity from "./components/FilterByTouristActivity/FilterByTouristActivity"
import AddActivity from "./components/AddActivity/AddActivity"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={InitialPage} />
      <Route exact path="/countries">
        <header className="App-header">
          <Home />
        </header>
        <Pages />
        <FilterByContinent />
        <FilterByTouristActivity />
        <Countries />
        <CountriesSearch />
      </Route>
      <Route path="/countries/addactivity" component={AddActivity} />
      <Route path="/country/:id" component={CountryDetails} />
    </div>
  )
}

export default App
