import React, { useState } from "react"
import { Link } from "react-router-dom"

function AddActivity() {
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  })

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let { name, difficulty, duration, season, countries } = input
      let body = { name, difficulty, duration, season, countries }

      if (
        name === "" ||
        difficulty === "" ||
        duration === "" ||
        season === "" ||
        countries === ""
      ) {
        alert("Fill all the fields")
      } else {
        const response = await fetch("http://localhost:3001/activity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      }
    } catch (error) {
      console.error(error.message)
    }
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: "",
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Activity:</label>
        <input
          type="text"
          name="name"
          placeholder="Type an activity here"
          onChange={handleInputChange}
          value={input.name}
        />
      </div>
      <div>
        <label>Difficulty:</label>
        <input
          type="number"
          step="0"
          min="1"
          max="5"
          name="difficulty"
          onChange={handleInputChange}
          value={input.difficulty}
        />
      </div>
      <div>
        <label>Duration (hours):</label>
        <input
          type="number"
          step="0.01"
          min="0"
          name="duration"
          onChange={handleInputChange}
          value={input.duration}
        />
      </div>
      <div>
        <label Forhtml="season">Season</label>
        <select name="season" id="season" onChange={handleInputChange}>
          <option value="">Choose a season</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
      </div>
      <div>
        <label>Countries codes:</label>
        <input
          type="text"
          name="countries"
          placeholder="Ex: COL, MEX"
          onChange={handleInputChange}
          value={input.countries}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
      <Link to="/countries">
        <div>Back home</div>
      </Link>
    </form>
  )
}

export default AddActivity
