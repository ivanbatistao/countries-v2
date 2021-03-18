import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { filterByTouristActivity } from "../../actions/index"

function FilterByTouristActivity() {
  const dispatch = useDispatch()

  const [touristActivity, setTouristActivity] = useState("")

  function handleChange(e) {
    e.preventDefault()
    setTouristActivity(e.target.value)
  }

  function handleSubmit() {
    dispatch(filterByTouristActivity(touristActivity))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Look countries for a tourist activity"
        value={touristActivity}
        onChange={(e) => handleChange(e)}
      />
      <input className="search-submit" type="submit" value="SUBMIT" />
    </form>
  )
}

export default FilterByTouristActivity
