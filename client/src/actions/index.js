import {
  GET_TEN_COUNTRIES,
  GET_COUNTRIES_SEARCH,
  GET_COUNTRY_DETAILS,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC,
  ORDER_DESC,
} from "../actions/action-types"

export function getTenCountries() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries`)
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
        dispatch({ type: GET_COUNTRIES_SEARCH, payload: json })
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

export function getCountryPagination(page) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_PAGES, payload: json })
      })
  }
}

export function filterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: payload,
  }
}

export function filterByTouristActivity(touristActivity) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?activity=${touristActivity}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: FILTER_BY_TOURIST_ACTIVITY, payload: json })
      })
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