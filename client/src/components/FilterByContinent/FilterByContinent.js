import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { filterByContinent,  getCountryPagination } from "../../actions/index"

function FilterByContinent() {
  const dispatch = useDispatch()
  let { stateChooseContinent, pages } = useSelector((state) => state)
  
  function handleOption(e) {
    e.preventDefault()
    dispatch(filterByContinent(e.target.value))
  }

  if (stateChooseContinent === "inactive") {
    return (
      <Link to="/countries">
        <button onClick="window.location.reload()">HOME</button>
      </Link>
    )
  } else if (stateChooseContinent === "active" || stateChooseContinent === "") {
    return (
      <label htmlFor="continents">
        {" "}
        Choose a continent
        <select id="continents" onChange={(e) => handleOption(e)}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    )
  }
}

export default FilterByContinent
