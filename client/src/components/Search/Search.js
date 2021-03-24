import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { getCountriesSearch } from "../../actions/index"

import style from './Search.module.css'


export default function Search() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)

    // THESE TWO LINES ARE TO SEARCH DINAMICALLY
    // if(event.target.value !== "") {
    //   dispatch(getCountriesSearch(event.target.value))
    // }
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (name === "") {
      alert("Type a name")
    } else {
      dispatch(getCountriesSearch(name))
      setName("")
    }
  }

  return (
    <Fragment>
      <form className={style.searchCountryButtom} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={style.inputSearch}
          placeholder=" Type a country name..."
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <input className={style.searchSubmit} type="submit" value="SEARCH FOR A COUNTRY" />
      </form>
    </Fragment>
  )
}
