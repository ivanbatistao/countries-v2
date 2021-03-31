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
    if (current.message) {
      return <div className={style.countries}>Didn't find a country with that tourist activity? Try a new search.</div>
    } else {
      return (
        <div className={style.countries}>
          Didn't find a country? Try a new search.
        </div>
      )
    }
  }

  if (current.length > 0) {
    return (
      <div className={style.containerCards}>
        {current.map((country) => (
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
        <p>Loading...</p>
      </div>
    )
  }
}

export default Countries
