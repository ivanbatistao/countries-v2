import {
  GET_TEN_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRIES_SEARCH,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC,
  ORDER_DESC,
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
  current: [],
  bottom: "", // Order ASC, DESC
  stateChooseContinent: "",
  setContinent: "", // active or inactive
  continentState: "", // All, Africa, Americas
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEN_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        current: action.payload,
        stateChooseContinent: "active",
      }
    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        current: action.payload,
        stateChooseContinent: "inactive",
      }
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: action.payload,
        stateChooseContinent: "active",
      }
    case GET_PAGES:
      return {
        ...state,
        countries: action.payload,
        current: action.payload.sort(),
        stateChooseContinent: "active",
      }
    case FILTER_BY_CONTINENT:
      if (action.payload.continent === "all") {
        let newAction = action.payload.json.splice(0, 10)
        return {
          ...state,
          countries: newAction,
          current: newAction,
          continentState: action.payload.continent,
          pages: " "
            .repeat(24)
            .split(" ")
            .map((item, i) => i),
        }
      } else {
        if (action.payload.continent !== "all") {
          let newAction = action.payload.json
            .filter((country) => country.continent === action.payload.continent)
            .splice(0, 10)
          if (action.payload.continent === "Africa" || action.payload.continent  === "Americas" || action.payload.continent === "Europe") {
            var newPages = 5;
          } else if (action.payload.continent === "Asia") {
            var newPages = 4;
          } else if (action.payload.continent === "Oceania") {
            var newPages = 2
          }
          return {
            ...state,
            countries: newAction,
            current: newAction,
            continentState: action.payload.continent,
            pages: " "
              .repeat(newPages)
              .split(" ")
              .map((item, i) => i),
          }
        }
      }
    case FILTER_BY_TOURIST_ACTIVITY:
      let my = []
      if (Array.isArray(action.payload)) {
        let newArr = action.payload
          .filter((obj) => obj.countries.length > 0)
          .map((obj) => {
            let { countries: newArr } = obj
            my = [...my, ...newArr]
          })
      } else {
        my = []
      }
      return {
        ...state,
        current: my,
        stateChooseContinent: "inactive",
      }
    case ORDER_ASC:
      return {
        ...state,
        bottom: "ASC",
      }
    case ORDER_DESC:
      return {
        ...state,
        bottom: "DESC",
      }
    default:
      return state
  }
}
