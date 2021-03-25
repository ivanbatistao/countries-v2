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
  GET_HOME
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
  bottom: "", // Order ASC, DESC
  stateChooseContinent: "",
  setContinent: "", // active or inactive
  continentState: "", // All, Africa, Americas
  orderPop: true,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEN_COUNTRIES:
      return {
        ...state,
        // countries: action.payload.sort((a, b) => {
        //   if (a.name > b.name) return 1
        //   if (a.name < b.name) return -1
        //   return 0
        // }),
        current: action.payload.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }),
        stateChooseContinent: "active",
      }
    // case GET_COUNTRIES_SEARCH:
    //   return {
    //     ...state,
    //     current: action.payload,
    //     stateChooseContinent: "inactive",
    //     pages: "",
    //   }
      case GET_COUNTRIES_SEARCH:
      let newName = action.payload.name.toLowerCase()
      let newPayloadJson = action.payload.json.map(obj => ({...obj, name: obj.name.toLowerCase()}))
      let newPayload = newPayloadJson.filter(obj => obj.name.includes(newName))
      return {
        ...state,
        current: newPayload,
        stateChooseContinent: "inactive",
        pages: "",
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
        // countries: action.payload.sort((a, b) => {
        //   if (a.name > b.name) return 1
        //   if (a.name < b.name) return -1
        //   return 0
        // }),
        current: action.payload.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }),
        stateChooseContinent: "active",
      }
    case FILTER_BY_CONTINENT:
      if (action.payload.continent === "all") {
        let newAction = action.payload.json.splice(0, 10)
        return {
          ...state,
          // countries: newAction.sort((a, b) => {
          //   if (a.name > b.name) return 1
          //   if (a.name < b.name) return -1
          //   return 0
          // }),
          current: newAction.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
          }),
          continentState: action.payload.continent,
          pages: " "
            .repeat(24)
            .split(" ")
            .map((item, i) => i),
          buttom: "",
        }
      } else {
        if (action.payload.continent !== "all") {
          let newAction = action.payload.json
            .filter((country) => country.continent === action.payload.continent)
            .sort(function (a, b) {
              return a.name.localeCompare(b.name) || b.population + a.population
            })
            .splice(0, 10)
          if (
            action.payload.continent === "Africa" ||
            action.payload.continent === "Americas" ||
            action.payload.continent === "Europe"
          ) {
            var newPages = 5
          } else if (action.payload.continent === "Asia") {
            var newPages = 4
          } else if (action.payload.continent === "Oceania") {
            var newPages = 2
          }
          return {
            ...state,
            // countries: newAction.sort((a, b) => {
            //   if (a.name > b.name) return 1
            //   if (a.name < b.name) return -1
            //   return 0
            // }),
            current: newAction.sort((a, b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            }),
            continentState: action.payload.continent,
            pages: " "
              .repeat(newPages)
              .split(" ")
              .map((item, i) => i),
            buttom: "DESC",
          }
        }
      }
    case FILTER_BY_TOURIST_ACTIVITY:
      let myNewArr = []
      if (Array.isArray(action.payload)) {
        let newArr = action.payload
          .filter((obj) => obj.countries.length > 0)
          .map((obj) => {
            let { countries: arr } = obj
            myNewArr = [...myNewArr, ...arr]
          })
          myNewArr = [...myNewArr.filter((country, i, arr) => {
                return arr.map(a => a.name).indexOf(country.name) === i;
            })]
      } else {
        myNewArr = []
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
        current: state.current.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }),
        bottom: "ASC",
      }
    case ORDER_DESC:
      return {
        ...state,
        current: state.current.sort((a, b) => {
          if (a.name > b.name) return -1
          if (a.name < b.name) return 1
          return 0
        }),
        bottom: "DESC",
      }
    case ORDER_POP:
      console.log("reducer", action.poyload)
      if (action.payload === true) {
        return {
          ...state,
          current: state.current.sort((a, b) => {
            if (a.population > b.population) return 1
            if (a.population < b.population) return -1
            return 0
          }),
          orderPop: true,
        }
      }
      if (action.payload === false) {
        return {
          ...state,
          current: state.current.sort((a, b) => {
            if (a.population > b.population) return -1
            if (a.population < b.population) return 1
            return 0
          }),
          orderPop: false,
        }
      }
    case GET_HOME:
      return {
        ...state,
        pages: " "
        .repeat(24)
        .split(" ")
        .map((item, i) => i),
      }
    default:
      return state
  }
}
