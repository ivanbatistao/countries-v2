import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Country from "../Country/Country"
import { getTenCountries } from "../../actions/index"

import style from "./Countries.module.css"

function Countries() {
  const dispatch = useDispatch()
  let { current } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getTenCountries())
  }, [dispatch])

  if (!(current instanceof Array)) {
    return (<div className={style.countries}>Country Not Found</div>)
  }

  if (current.length > 0) {
    return (
      <div className={style.containerCards}>
        {current.map((
          country
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
      <div className={style.countries}>
        <p>There are no countries to show</p>
      </div>
    )
  }
}

export default Countries

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
