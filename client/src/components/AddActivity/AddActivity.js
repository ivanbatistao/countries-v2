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


      if (
        name === "" ||
        difficulty === "" ||
        duration === "" ||
        season === "" ||
        countries.length === 0
      ) {
        return alert("Fill all the fields")
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
    })
    setCountries([])
  }

  const dataJson = async () => {
    try {
      const response = await fetch("http://localhost:3001/allCountries")
      const jsonData = await response.json()
      setData(jsonData.sort((a,b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
      }))
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    dataJson()
  }, [])

  return (
    <div className={style.form}>
      <div className={style.cointainerInside}>
        <h1>ADD A NEW TOURIST ACTIVITY</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Activity: </label>
            <input
              type="text"
              name="name"
              placeholder="Type an activity here"
              onChange={handleInputChange}
              value={input.name}
            />
          </div>
          <div>
            <label>Difficulty: </label>
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
            <label>Duration (hours): </label>
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
            <label Forhtml="season">Season: </label>
            <select name="season" id="season" onChange={handleInputChange}>
              <option value="">Choose a season</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <div className={style.select}>
            <label>Choose countries: </label>
            <select
                onChange={(e) =>
          setCountries(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
              }
              name="countries"
              id="countries"
              multiple
            >
              { data.map(
                (country,i) => {
                  return <option key={i} value={country.id}>{country.name}</option>
                }
              )
              }
            </select>
          </div>
          <div className={style.bottoms}>
            <div>
              <input className={style.submit} type="submit" value="SUBMIT" />
            </div>
            <Link to="/countries">
              <input
                className={style.backHome}
                type="submit"
                value="BACK HOME"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddActivity
