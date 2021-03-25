import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { filterByTouristActivity } from "../../actions/index"

import style from "./FilterByTouristActivity.module.css"

function FilterByTouristActivity() {
  const dispatch = useDispatch()

  const [touristActivity, setTouristActivity] = useState("")

  function handleChange(e) {
    e.preventDefault()
    setTouristActivity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
      dispatch(filterByTouristActivity(touristActivity))
      setTouristActivity("")
  }

  return (
    <form className={style.searchTouristButtom} onSubmit={handleSubmit}>
      <input
        className={style.inputSearch}
        type="text"
        placeholder=" Type a tourist activity"
        value={touristActivity}
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        className={style.searchSubmit}
        type="submit"
        value="SEARCH BY TOURIST ACTIVITY"
      />
    </form>
  )
}

export default FilterByTouristActivity
