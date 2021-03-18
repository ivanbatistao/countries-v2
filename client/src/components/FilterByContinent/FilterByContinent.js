import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { filterByContinent } from "../../actions/index"

function FilterByContinent() {
  const dispatch = useDispatch()

  function handleOption(e) {
    e.preventDefault()
    dispatch(filterByContinent(e.target.value))
  }

  return (
    <label htmlFor="continents"> Choose a continent
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

export default FilterByContinent
