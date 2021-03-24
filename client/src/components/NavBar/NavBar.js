import React from "react"
import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div title="container" className={style.home}>
      <div className={style.nameApp}>Where in the world?</div>
      <Link className={style.link} to="/">
        <div>Welcome</div>
      </Link>
      <Link className={style.link} to={`/countries/addactivity`}>
        <div>Add tourist activity</div>
      </Link>
    </div>
  )
}
