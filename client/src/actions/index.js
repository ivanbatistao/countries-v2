import {
  GET_TEN_COUNTRIES,
  GET_COUNTRIES_SEARCH,
  GET_COUNTRY_DETAILS,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  FILTER_ASC_ALPHABET,
  FILTER_DESC_ALPHABET,
  FILTER_ASC_POPULATION,
  FILTER_DESC_POPULATION,
  ADD_TOURIST_ACTIVITY,
} from "../actions/action-types"

export function getTenCountries() {
  return function (dispatch) {
    return fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_TEN_COUNTRIES, payload: json })
      })
  }
}

// export function getCountries(name) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/countries/${name}`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_COUNTRIES_SEARCH, payload: json })
//       })
//   }
// }

export function getCountriesSearch(name) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_COUNTRIES_SEARCH", payload: json })
      })
  }
}

export function getCountryDetails(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_COUNTRY_DETAILS, payload: json })
      })
  }
}

// export function getCountryPagination(offset) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/countries?offset=${offset}`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_COUNTRY_DETAILS, payload: json })
//       })
//   }
// }
