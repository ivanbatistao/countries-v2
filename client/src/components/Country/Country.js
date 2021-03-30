import React from "react"
import { Link } from "react-router-dom"
import style from "./Country.module.css"

export default function Card({ name, flag, continent, id }) {
  return (
    <div className={style.card}>
      <img className={style.img} src={flag} alt={`flag-${name}`}></img>
      <div className={style.content}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.continent}>{continent}</p>
        <Link to={`/country/${id}`}>
          <button className={style.buttom}>DETAILS</button>
        </Link>
      </div>
    </div>
  )
}
