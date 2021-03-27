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
  GET_HOME,
  PAGE,
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
    dispatch({ type: GET_COUNTRIES_SEARCH, payload: { json, name } })
  }
}

export function getCountryDetails(id) {
  return async function (dispatch) {
    const response = await fetch(`http://localhost:3001/countries/${id}`)
    const json = await response.json()
    dispatch({ type: GET_COUNTRY_DETAILS, payload: json })
  }
}

export function getCountryPagination(page, continent, order, population) {
  console.log("actions:", population, page)
  if (population) {
    return async function (dispatch) {
      const response = await fetch(
        `http://localhost:3001/countries?page=${page}&&population=${population}`
      )
      const json = await response.json()
      dispatch({ type: GET_PAGES, payload: json })
    }
  } else {
    return async function (dispatch) {
      const response = await fetch(
        `http://localhost:3001/countries?page=${page}&&continent=${continent}&&order=${order}`
      )
      const json = await response.json()
      dispatch({ type: GET_PAGES, payload: json })
    }
  }
  
  
}

export function filterByContinent(continent) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/allCountries?continent=${continent}`
    )
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
    console.log("action", json)
    dispatch({ type: FILTER_BY_TOURIST_ACTIVITY, payload: json })
  }
}

export function orderAsc(page, continent, order) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?page=${page}&&continent=${continent}&&order=${order}`
    )
    const json = await response.json()
    dispatch({ type: ORDER_ASC, payload: json })
  }
}

export function orderDesc(page, continent, order) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?page=${page}&&continent=${continent}&&order=${order}`
    )
    const json = await response.json()
    dispatch({ type: ORDER_DESC, payload: json })
  }
}

export function orderPopulationAsc(page, population) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?page=${page}&&population=${population}`
    )
    const json = await response.json()
    dispatch({ type: ORDER_POP, payload: { json, population }})
  }
}

export function orderPopulationDesc(page, population) {
  return async function (dispatch) {
    const response = await fetch(
      `http://localhost:3001/countries?page=${page}&&population=${population}`
    )
    const json = await response.json()
    dispatch({ type: ORDER_POP, payload: { json, population }})
  }
}

export function getHome() {
  return {
    type: GET_HOME,
  }
}

export function changePage(page) {
  return {
    type: PAGE, payload: page 
  }
}
