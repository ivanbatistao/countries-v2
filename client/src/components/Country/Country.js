import React from "react"
import { Fragment } from "react"
import { Link } from "react-router-dom"

export default function Card({ name, flag, continent, id }) {
  return (
    <Fragment>
      <img src={flag} alt="flag"></img>
      <div className="#">
        <h1>{name}</h1>
        <p>{continent}</p>
        <Link to={`/country/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </Fragment>
  )
}
