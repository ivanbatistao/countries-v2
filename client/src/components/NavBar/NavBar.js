import React from "react"
import { Link } from "react-router-dom"
import style from "./NavBar.module.css"

export default function NavBar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.menuItems}>
          <li className={style.imgLi}>
            <Link to="/">
              <img
                className={style.img}
                src="https://www.flaticon.com/premium-icon/icons/svg/2072/2072130.svg"
                alt="main-img-logo"
              />
            </Link>
          </li>
          <div className={style.rightMenu}>
            <li className={style.li}>
              <Link className={style.link} onClick={() => {window.location.href="/countries"}} >
                HOME
              </Link>
            </li>
            <li className={style.li}>
              <Link className={style.link} to={`/countries/addactivity`}>
                ADD TOURIST ACTIVITY
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
