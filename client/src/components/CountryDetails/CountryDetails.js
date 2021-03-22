import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
// import style from './Cards.module.css'
import { getCountryDetails } from "../../actions/index"

function CountryDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { countryDetails } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCountryDetails(id))
  }, [])

  return (
    <Fragment>
      <div className="country-detail">
        <img src={`https://restcountries.eu/data/${id.toLowerCase()}.svg`}/>
        <h1>{countryDetails.name}</h1>
        <p>{countryDetails.id}</p>
        <p>{countryDetails.capital}</p>
        <p>{countryDetails.subregion}</p>
        <p>{`${countryDetails.area} km2`}</p>
        <p>{`${countryDetails.population} habitants`}</p>
        <div>
          {countryDetails.touristActivities?.length > 0 ? (
            countryDetails.touristActivities.map((touristActivity, id) => (
              <div key={id}>
                <p>{touristActivity.name}</p>
              </div>
            ))
          ) : (
            <p>This country doesn't have tourist activities</p>
          )}
        </div>
        <Link to="/countries">
          <button onClick="window.location.refresh=true">Back Home</button>
        </Link>
        <Link to="/countries/addactivity">
          <div>Add Activity</div>
        </Link>
      </div>
    </Fragment>
  )
}

export default CountryDetails
