import {
  GET_TEN_COUNTRIES,
  GET_COUNTRIES_SEARCH,
  GET_COUNTRY_DETAILS,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC_ALPHABET,
  ORDER_DESC_ALPHABET,
  ORDER_ASC_POPULATION,
  ORDER_DESC_POPULATION,
  ADD_TOURIST_ACTIVITY,
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

// export function getCountriesPage(page) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/countries?page=${page}`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_PAGES, payload: json })
//       })
//   }
// }

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

export function filterByTouristActivity(payload) {
  return {
    type: FILTER_BY_TOURIST_ACTIVITY,
    payload: payload,
  }
}

// export async function postTouristActivity(payload) {
//   try {
//     let { name, difficulty, duration, season, countries } = payload
//     let body = { name, difficulty, duration, season, countries }
//     const response = await fetch("http://localholst:3001/activity", {
//       method: "POST",
//       header: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     })
//     // window.location = "/"
//   } catch (error) {
//     console.error(error.message)
//   }
// }

