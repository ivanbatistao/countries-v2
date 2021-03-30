import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { getCountriesSearch, getTenCountries } from "../../actions/index"

import style from "./Search.module.css"

export default function Search() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)

    // THESE LINES ARE TO SEARCH DINAMICALLY
    // if(event.target.value !== "") {
    //   dispatch(getCountriesSearch(name))
    // } else {
    //   dispatch(getTenCountries())
    // }
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(getCountriesSearch(name))
    setName("")
  }

  return (
    <form
      className={style.searchCountryButtom}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className={style.inputSearch}
        placeholder=" Type a country name..."
        type="text"
        value={name}
        onChange={(e) => handleChange(e)}
        required
      />
      <button type="submit" className={style.searchSubmit}>
        <FaSearch />
      </button>
    </form>
  )
}
