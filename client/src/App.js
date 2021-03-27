import React from "react"
import style from "./App.module.css"

import { Route } from "react-router-dom"

import InitialPage from "./components/InitialPage/InitialPage"
import Home from "./components/Home/Home"
import Search from "./components/Search/Search"
import Pages from "./components/Pages/Pages"
import OrderButtonsName from "./components/OrderButtonsName/OrderButtonsName"
import FilterByContinent from "./components/FilterByContinent/FilterByContinent"
import FilterByTouristActivity from "./components/FilterByTouristActivity/FilterByTouristActivity"
import Countries from "./components/Countries/Countries"

import CountryDetails from "./components/CountryDetails/CountryDetails"

import AddActivity from "./components/AddActivity/AddActivity"
import NavBarWelcome from "./components/NavBarWelcome/NavBarWelcome"
import OrderButtonPopulation from "./components/OrderButtonPopulation/OrderButtonPopulation"

function App() {
  return (
    <div className={style.main}>
      <Route exact path="/">
        <div className={style.initialPage}>
          <NavBarWelcome />
          <InitialPage />
        </div>
      </Route>
      <Route exact path="/countries">
        <header className={style.AppHeader}>
          <Home />
        </header>
        <div className={style.searchFilterActivity}>
          <Search />
          <FilterByTouristActivity />
        </div>
        <div>
          <Pages />
        </div>
        <div className={style.chooseContinent}>
          <FilterByContinent />
        </div>
        <div className={style.orderButtom1}>
          <OrderButtonsName />
        </div>
        <div className={style.orderButtom2}>
          <OrderButtonPopulation />
        </div>
        <Countries />
      </Route>
      <Route path="/countries/addactivity" component={AddActivity} />
      <Route path="/country/:id" component={CountryDetails} />
    </div>
  )
}

export default App
