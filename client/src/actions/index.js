import {
  GET_TEN_COUNTRIES,
  GET_COUNTRIES_SEARCH,
  GET_COUNTRY_DETAILS,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC,
  ORDER_DESC,
  ORDER_POP,
  GET_HOME
} from "../actions/action-types"

export function getTenCountries() {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/countries`)
    const json = await response.json()
    dispatch({ type: GET_TEN_COUNTRIES, payload: json })
  }
}

// export function getCountriesSearch(name) {
//   return async function (dispatch) {
//     const response = await fetch(`http://localhost:3001/countries?name=${name}`)
//     const json = await response.json()
//     dispatch({ type: GET_COUNTRIES_SEARCH, payload: json })
//   }
// }

export function getCountriesSearch(name) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/allCountries`)
    const json = await response.json()
    dispatch({ type: GET_COUNTRIES_SEARCH, payload: {json, name }})
  }
}

export function getCountryDetails(id) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/countries/${id}`)
    const json = await response.json()
    dispatch({ type: GET_COUNTRY_DETAILS, payload: json })
  }
}

export function getCountryPagination(page, continent) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?page=${page}&&continent=${continent}`
    )
    const json = await response.json()
    dispatch({ type: GET_PAGES, payload: json })
  }
}

export function filterByContinent(continent) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/allCountries?continent=${continent}`)
    const json = await response.json()
    dispatch({ type: FILTER_BY_CONTINENT, payload: { json, continent } })
  }
}

export function filterByTouristActivity(touristActivity) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?activity=${touristActivity}`
    )
    const json = await response.json()
    dispatch({ type: FILTER_BY_TOURIST_ACTIVITY, payload: json })
  }
}

export function orderAsc() {
  return {
    type: ORDER_ASC,
  }
}

export function orderDesc() {
  return {
    type: ORDER_DESC,
  }
}

export function orderPopulation(payload) {
  return {
    type: ORDER_POP,
    payload
  }
}

export function getHome() {
  return {
    type: GET_HOME,
  }
}