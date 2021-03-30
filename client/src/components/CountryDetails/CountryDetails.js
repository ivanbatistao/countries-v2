import React, { useEffect } from "react"
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
  }, [dispatch, id])

  return (
    <div className={style.containerCards}>
      <div className={style.card}>
        <img
          className={style.img}
          src={`https://restcountries.eu/data/${id.toLowerCase()}.svg`}
          alt="img-country"
        />
        <h1 className={style.name}>{countryDetails.name}</h1>
        <p className={style.p}>
          <span className={style.span}>CODE: </span> {countryDetails.id}
        </p>
        <p className={style.p}>
          <span className={style.span}>CAPITAL: </span> {countryDetails.capital}
        </p>
        <p className={style.p}>
          <span className={style.span}>SUBREGION: </span>{" "}
          {countryDetails.subregion}
        </p>
        <p className={style.p}>
          <span className={style.span}>AREA: </span>{" "}
          {`${countryDetails.area} km2`}
        </p>
        <p className={style.p}>
          <span className={style.span}>POPULATION: </span>{" "}
          {`${countryDetails.population} habitants`}
        </p>
        <div className={style.activities}>
          <b>Tourist Activities:</b>
          <div className={style.touristActivitiesContainer}>
            {countryDetails.touristActivities?.length > 0 ? (
              countryDetails.touristActivities.map((touristActivity, id) => (
                <div key={id}>
                  <p className={style.p}>
                    {id + 1}. {touristActivity.name}
                  </p>
                  <p className={style.p2}>
                    - Difficulty: {touristActivity.difficulty}
                  </p>
                  <p className={style.p2}>
                    - Duration: {touristActivity.duration}
                  </p>
                  <p className={style.p2}>- Season: {touristActivity.season}</p>
                </div>
              ))
            ) : (
              <p className={style.p}>
                This country doesn't have tourist activities
              </p>
            )}
          </div>
        </div>
        <Link to="/countries">
          <button
            className={style.buttom}
            onClick="window.location.refresh=true"
          >
            BACK HOME
          </button>
        </Link>
        <Link to="/countries/addactivity">
          <input className={style.buttom} type="button" value="ADD ACTIVITY" />
        </Link>
      </div>
    </div>
  )
}

export default CountryDetails
