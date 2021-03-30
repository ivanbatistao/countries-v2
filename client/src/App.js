import React from "react"
import style from "./App.module.css"

import { Route } from "react-router-dom"

import InitialPage from "./components/InitialPage/InitialPage"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Search from "./components/Search/Search"
import Pages from "./components/Pages/Pages"
import OrderButtonsName from "./components/OrderButtonsName/OrderButtonsName"
import FilterByContinent from "./components/FilterByContinent/FilterByContinent"
import FilterByTouristActivity from "./components/FilterByTouristActivity/FilterByTouristActivity"
import Countries from "./components/Countries/Countries"

import CountryDetails from "./components/CountryDetails/CountryDetails"

import AddActivity from "./components/AddActivity/AddActivity"
import OrderButtonPopulation from "./components/OrderButtonPopulation/OrderButtonPopulation"

function App() {
  return (
    <div className={style.main}>
      <Route exact path="/">
        <NavBar />
        <InitialPage />
        <div className={style.footer}>
          <Footer />
        </div>
      </Route>
      <Route exact path="/countries">
        <NavBar />
        <div className={style.filtersOrders}>
          <div className={style.searchFilterActivity}>
            <Search />
            <FilterByTouristActivity />
          </div>
          <div className={style.AscDesc}>
            <OrderButtonsName />
            <OrderButtonPopulation />
          </div>
        </div>
        <div className={style.containerPagesContinent}>
          <Pages />
          <FilterByContinent />
        </div>
        <Countries />
        <Footer />
      </Route>
      <Route path="/countries/addactivity">
        <AddActivity />
        <Footer />
      </Route>
      <Route path="/country/:id">
        <CountryDetails />
        <Footer />
      </Route>
    </div>
  )
}

export default App

// function App() {
//   return (
//     <div className={style.main}>
//       <Route exact path="/">
//         <div className={style.initialPage}>
//           <NavBarWelcome />
//           <InitialPage />
//         </div>
//       </Route>
//       <Route exact path="/countries">
//         <header className={style.AppHeader}>
//           <Home />
//         </header>
//         <div className={style.searchFilterActivity}>
//           <Search />
//           <FilterByTouristActivity />
//         </div>
//         <div>
//           <Pages />
//         </div>
//         <div className={style.chooseContinent}>
//           <FilterByContinent />
//         </div>
//         <div className={style.orderButtom1}>
//           <OrderButtonsName />
//         </div>
//         <div className={style.orderButtom2}>
//           <OrderButtonPopulation />
//         </div>
//         <Countries />
//       </Route>
//       <Route path="/countries/addactivity" component={AddActivity} />
//       <Route path="/country/:id" component={CountryDetails} />
//     </div>
//   )
// }
