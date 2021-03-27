import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getHome } from "../../actions/index"

import style from "./NavBarWelcome.module.css"

export default function NavBar() {

  const dispatch = useDispatch()

  function handleClickHome() {
    dispatch(getHome())
  }

  return (
    <div className={style.home}>
      <div className={style.nameApp}>Where in the world?</div>
      <Link className={style.link} to="/countries">
        <div onClick={(e) => handleClickHome(e)}>Home</div>
      </Link>
      <div className={style.images}>
        <a href="https://github.com/ivanbatistao/" target="_blank">
          <img
            className={style.img1}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="img-github"
          />
        </a>
          <a href="https://www.linkedin.com/in/ivanbatistao" target="_blank"><img
            className={style.img2}
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="img-linkedin"
          /></a>
      </div>
    </div>
  )
}
