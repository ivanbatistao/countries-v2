import React, { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import Country from "../Country/Country"
// import style from './Cards.module.css'
import { getTenCountries } from "../../actions/index"
 
function Cards() {
  const dispatch = useDispatch()
  const { byContinent } = useSelector((state) => state)
 
  useEffect(() => {
    dispatch(getTenCountries())
  }, [])
 
  if (byContinent) {
    return (
      <div className="#">
        {byContinent.map((
          country // con ? se pregunta si existe algo ahí
        ) => (
          <Country
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <p>'There are no countries to display'</p>
      </div>
    )
  }
}
 
export default Cards

// import React, { useEffect } from "react"
// import { connect } from "react-redux"
// import Card from "../Card/Card"
// // import style from './Cards.module.css'
// import { getTenCountries } from "../../actions/index"

// function Cards({ countries, getTenCountries }) {
//   useEffect(() => {
//     getTenCountries()
//   }, [])
  
//   if (countries) {
//     return (
//       <div className="#">
//         {countries.map((
//           country // con ? se pregunta si existe algo ahí
//         ) => (
//           <Card
//             key={country.id}
//             id={country.id}
//             flag={country.flag}
//             name={country.name}
//             continent={country.continent}
//           />
//         ))}
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <p>'There are no countries to display'</p>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//     countries: state.countries,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getAllCountries: () => dispatch(getAllCountries()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cards)
