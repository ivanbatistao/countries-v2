import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import style from "./AddActivity.module.css"

function AddActivity() {
  const [data, setData] = useState([])
  const [countries, setCountries] = useState([])

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
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
      let { name, difficulty, duration, season } = input
      let body = { name, difficulty, duration, season, countries }

        const response = await fetch("http://localhost:3001/activity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
    } catch (error) {
      console.error(error.message)
    }
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
    })
    setCountries([])
    alert("Your activity was submitted succesfully")
  }

  const dataJson = async () => {
    try {
      const response = await fetch("http://localhost:3001/allCountries")
      const jsonData = await response.json()
      setData(
        jsonData.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    dataJson()
  }, [])

  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <h1 className={style.title}>ADD A NEW TOURIST ACTIVITY</h1>
      <input
        className={style.formEntry}
        type="text"
        name="name"
        placeholder="Type an activity here"
        onChange={handleInputChange}
        value={input.name}
        required
      />
      <input
        className={style.formEntry}
        placeholder="Choose difficulty"
        type="number"
        step="0"
        min="1"
        max="5"
        name="difficulty"
        onChange={handleInputChange}
        value={input.difficulty}
        required
      />
      <input
        className={style.formEntry}
        placeholder="Duration (hours)"
        type="number"
        step="0.01"
        min="0"
        name="duration"
        onChange={handleInputChange}
        value={input.duration}
        required
      />
      <select  className={style.formEntry2} name="season" id="season" onChange={handleInputChange} required>
        <option value="">Choose a season</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
      </select>
      <label className={style.secondaryTitle}>Choose countries: </label>
      <select
      className={style.formEntry2}
        onChange={(e) =>
          setCountries(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        name="countries"
        id="countries"
        multiple
        required
      >
        {data.map((country, i) => {
          return (
            <option key={i} value={country.id}>
              {country.name}
            </option>
          )
        })}
      </select>
      <div className={style.bottoms}>
        <div>
          <input className={style.submit} type="submit" value="SUBMIT" />
        </div>
        <Link to="/countries">
          <input className={style.backHome} type="submit" value="BACK HOME" />
        </Link>
      </div>
    </form>
  )
}

export default AddActivity
