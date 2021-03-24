import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { filterByContinent } from "../../actions/index"

function FilterByContinent() {
  const dispatch = useDispatch()
  let { stateChooseContinent } = useSelector((state) => state)
  
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
        <select id="continents" onChange={(e) => handleOption(e)}>
          <option value="all">ALL</option>
          <option value="Africa">AFRICA</option>
          <option value="Americas">AMERICAS</option>
          <option value="Asia">ASIA</option>
          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>
        </select>
      </label>
    )
  }
}

export default FilterByContinent
