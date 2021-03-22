import React from "react"
import { Link } from "react-router-dom"
import style from "./Country.module.css"

export default function Card({ name, flag, continent, id }) {
  return (
    <div className={style.card}>
      <img className={style.img} src={flag} alt="flag"></img>
      <div className={style.content}>
        <h1>{name}</h1>
        <p>{continent}</p>
        <Link to={`/country/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  )
}
