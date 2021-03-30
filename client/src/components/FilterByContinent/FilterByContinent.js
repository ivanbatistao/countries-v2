import React, { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { filterByContinent } from "../../actions/index"

import style from "./FilterByContinent.module.css"

function FilterByContinent() {
  const dispatch = useDispatch()
  let { stateChooseContinent, orderPop } = useSelector((state) => state)
  
  function handleOption(e) {
    e.preventDefault()
    dispatch(filterByContinent(e.target.value))
  }

  if (stateChooseContinent === "inactive") {
    return (
      <Link to="/countries">
        <button className={style.button} onClick="window.location.reload()">HOME</button>
      </Link>
    )
  } else if (orderPop !== "") {
    return <Fragment></Fragment>
  } else if (stateChooseContinent === "active" || stateChooseContinent === "") {
    return (
        <select className={style.container} id="continents" onChange={(e) => handleOption(e)}>
          <option value="all">CHOOSE A CONTINENT</option>
          <option value="all">ALL</option>
          <option value="Africa">AFRICA</option>
          <option value="Americas">AMERICAS</option>
          <option value="Asia">ASIA</option>
          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>
        </select>
    )
  }
}

export default FilterByContinent
