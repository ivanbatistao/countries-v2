import {
  GET_TEN_COUNTRIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRIES_SEARCH,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  FILTER_ASC_ALPHABET,
  FILTER_DESC_ALPHABET,
  FILTER_ASC_POPULATION,
  FILTER_DESC_POPULATION,
  ADD_TOURIST_ACTIVITY,
} from "../actions/action-types"

const initialState = {
  countries: [],
  countriesSearch: [],
  countryDetails: {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEN_COUNTRIES:
      return {
        ...state,
        countries: state.countries.concat(action.payload),
      }
    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      }
      case "GET_COUNTRY_DETAILS":
        return {
          ...state,
          countryDetails: action.payload,
        }
    default:
      return state
  }
}
