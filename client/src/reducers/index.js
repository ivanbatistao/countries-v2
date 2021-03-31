import {
  GET_TEN_COUNTRIES,
  GET_COUNTRY_DETAILS,
  GET_COUNTRIES_SEARCH,
  GET_PAGES,
  FILTER_BY_CONTINENT,
  FILTER_BY_TOURIST_ACTIVITY,
  ORDER_ASC,
  ORDER_DESC,
  ORDER_POP,
  GET_HOME,
  PAGE,
} from "../actions/action-types"

const numPages = 24

const initialState = {
  // countries: [],
  countriesSearch: [],
  countryDetails: {},
  pages: " "
    .repeat(numPages)
    .split(" ")
    .map((item, i) => i),
  current: [],
  bottomOrder: "", // Order ASC, DESC
  stateChooseContinent: "",
  setContinent: "", // active or inactive
  continentState: "", // All, Africa, Americas
  orderPop: "",
  page: 0,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEN_COUNTRIES:
      return {
        ...state,
        current: action.payload,
        stateChooseContinent: "active",
      }
    case GET_COUNTRIES_SEARCH:
      let newName = action.payload.name.toLowerCase()
      let newPayloadJson = action.payload.json.map((obj) => ({
        ...obj,
        name: obj.name.toLowerCase(),
      }))
      let newPayload = newPayloadJson
        .filter((obj) => obj.name.includes(newName))
        .splice(0, 10)
        .map((obj) => ({
          ...obj,
          name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1),
        }))
      if (newPayload.length > 0) {
        return {
          ...state,
          current: newPayload,
          stateChooseContinent: "inactive",
          pages: "",
        }
      } else {
        return {
          ...state,
          current: {},
          stateChooseContinent: "inactive",
          pages: "",
        }
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
        current: action.payload,
        stateChooseContinent: "active",
      }
    case FILTER_BY_CONTINENT:
      if (action.payload.continent === "all") {
        let newAction = action.payload.json.splice(0, 10)
        return {
          ...state,
          current: newAction,
          continentState: action.payload.continent,
          pages: " "
            .repeat(24)
            .split(" ")
            .map((item, i) => i),
          bottomOrder: "",
        }
      } else {
        if (action.payload.continent !== "all") {
          let newPages
          let newAction = action.payload.json
            .filter((country) => country.continent === action.payload.continent)
            .splice(0, 10)
          if (
            action.payload.continent === "Africa" ||
            action.payload.continent === "Americas" ||
            action.payload.continent === "Europe"
          ) {
            newPages = 5
          } else if (action.payload.continent === "Asia") {
            newPages = 4
          } else if (action.payload.continent === "Oceania") {
            newPages = 2
          }
          return {
            ...state,
            current: newAction,
            continentState: action.payload.continent,
            pages: " "
              .repeat(newPages)
              .split(" ")
              .map((item, i) => i),
            bottomOrder: "",
            orderPop: "",
          }
        }
      }
      break
    case FILTER_BY_TOURIST_ACTIVITY:
      let myNewArr = []
      if (Array.isArray(action.payload)) {
        action.payload
          .filter((obj) => obj.countries.length > 0)
          .map((obj) => {
            let { countries: arr } = obj
            return (myNewArr = [...myNewArr, ...arr])
          })
        myNewArr = [
          ...myNewArr.filter((country, i, arr) => {
            return arr.map((a) => a.name).indexOf(country.name) === i
          }),
        ]
      } else {
        myNewArr = action.payload
      }
      return {
        ...state,
        current: myNewArr,
        stateChooseContinent: "inactive",
        pages: "",
      }
    case ORDER_ASC:
      return {
        ...state,
        current: action.payload,
        bottomOrder: "ASC",
        orderPop: "",
      }
    case ORDER_DESC:
      return {
        ...state,
        current: action.payload,
        bottomOrder: "DESC",
        orderPop: "",
      }
    case ORDER_POP:
      return {
        ...state,
        current: action.payload.json,
        orderPop: action.payload.population,
      }
    case GET_HOME:
      return {
        ...state,
        pages: " "
          .repeat(24)
          .split(" ")
          .map((item, i) => i),
      }
    case PAGE:
      return {
        ...state,
        current: state.current,
        page: action.payload,
      }
    default:
      return state
  }
}
