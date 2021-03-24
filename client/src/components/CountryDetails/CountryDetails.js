import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { getCountryDetails } from "../../actions/index"

import style from "./CountryDetails.module.css"

function CountryDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { countryDetails } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCountryDetails(id))
  }, [])

  return (
    <div className={style.containerCards}>
      <div className={style.card}>
        <img className={style.img} src={`https://restcountries.eu/data/${id.toLowerCase()}.svg`} />
        <h1 className={style.name}>{countryDetails.name}</h1>
        <p className={style.p}>Code: {countryDetails.id}</p>
        <p className={style.p}>Capital: {countryDetails.capital}</p>
        <p className={style.p}>Subregion: {countryDetails.subregion}</p>
        <p className={style.p}>Area: {`${countryDetails.area} km2`}</p>
        <p className={style.p}>Population: {`${countryDetails.population} habitants`}</p>
        <div className={style.activities}>Tourist activities: 
          {countryDetails.touristActivities?.length > 0 ? (
            countryDetails.touristActivities.map((touristActivity, id) => (
              <div key={id}>
                <p className={style.p}>{id+1}. {touristActivity.name}</p>
                <p className={style.p2}>- Difficulty: {touristActivity.difficulty}</p>
                <p className={style.p2}>- Duration: {touristActivity.duration}</p>
                <p className={style.p2}>- Season: {touristActivity.season}</p>
              </div>
            ))
          ) : (
            <p className={style.p}>This country doesn't have tourist activities</p>
          )}
        </div>
        <Link to="/countries">
          <button className={style.buttom} onClick="window.location.refresh=true">Back Home</button>
        </Link>
        <Link to="/countries/addactivity">
          <input className={style.buttom} type="button" value="Add Activity" />
        </Link>
      </div>
    </div>
  )
}

export default CountryDetails
