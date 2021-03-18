import {
  GET_TEN_COUNTRIES,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRIES_SEARCH,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC_ALPHABET,
  ORDER_DESC_ALPHABET,
  ORDER_ASC_POPULATION,
  ORDER_DESC_POPULATION,
  ADD_TOURIST_ACTIVITY,
} from "../actions/action-types"

const numPages = 24

const initialState = {
  countries: [],
  countriesSearch: [],
  countryDetails: {},
  pages: " "
    .repeat(numPages)
    .split(" ")
    .map((item, i) => i),
  byContinent: [],
  byTouristActivity: []
}

export default function rootReducer(state = initialState, action) {
  console.log("action reducer outside case:", action)
  switch (action.type) {
    case GET_TEN_COUNTRIES:
      return {
        ...state,
        countries: state.countries.concat(action.payload),
        byContinent: state.countries.concat(action.payload),
      }
    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      }
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: action.payload,
      }
    case GET_PAGES:
      return {
        ...state,
        countries: action.payload,
        byContinent: action.payload,
      }
    case FILTER_BY_CONTINENT:
      if (action.payload === "all") {
        return {
          ...state,
          byContinent: state.countries,
        }
      } else {
        return {
          ...state,
          byContinent: state.countries.filter(
            (country) => country.continent === action.payload
          ),
        }
      }
    // case FILTER_BY_TOURIST_ACTIVITY:
    //   console.log("action reducer inside case:", action)
    //   return {
    //     ...state,
    //     byTouristActivity: state.byContinent.filter(
    //       (country) => country.touristActivities.map(touristActivity => touristActivity.name === action.payload) 
    //     )
    //   }
    default:
      return state
  }
}
