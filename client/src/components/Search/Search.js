import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
// import style from './Cards.module.css'
// import Card from "../Card/Card"
import { getCountriesSearch } from "../../actions/index"

export default function Search() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")

  function handleChange(event) {
    setName(event.target.value)
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
      <form className="search-bottom" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          placeholder=" Type here..."
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <input className="search-submit" type="submit" value="SEARCH" />
      </form>
    </Fragment>
  )
}
